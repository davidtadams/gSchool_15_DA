var express = require("express");
var router = express.Router();
var databaseConnection = require("../database_connection");

router.get("/new", function(request, response, next) {
    response.render("authors/add_author", {layouts: "authors_layout"});
});

router.get("/:id", function(request, response, next) {
    databaseConnection("author")
        .select("*", "author.id AS author_id")
        .leftOuterJoin("book_author", "author.id", "author_id")
        .leftOuterJoin("book", "book_id", "book.id")
        .where("author.id", request.params.id)
    .then(function(authors){
        var authors = mapBooksToAuthors(authors);
        response.render("authors/get_author", {layout: "authors_layout", author: authors[0]});
    });
});

router.get("/", function(request, response, next) {
    databaseConnection("author")
        .select("*", "author.id AS author_id")
        .leftOuterJoin("book_author", "author.id", "author_id")
        .leftOuterJoin("book", "book_id", "book.id")
    .then(function(records){
        var authors = mapBooksToAuthors(records);
        response.render("authors/list_authors", {layout: "authors_layout", authors: authors});
    });
});

router.get("/delete/:id", function(request, response, next) {
    databaseConnection("author")
        .select("*", "author.id AS author_id")
        .leftOuterJoin("book_author", "author.id", "author_id")
        .leftOuterJoin("book", "book_id", "book.id")
        .where("author.id", request.params.id)
    .then(function(authors){
        var authors = mapBooksToAuthors(authors);
        response.render("authors/delete_author", {layout: "authors_layout", author: authors[0]});
    });
});

router.get("/edit/:id", function(request, response, next) {
    Promise.all([
        databaseConnection("author")
            .select("*", "author.id AS author_id")
            .leftOuterJoin("book_author", "author.id", "author_id")
            .leftOuterJoin("book", "book_id", "book.id")
            .where("author.id", request.params.id),
        databaseConnection("book").select()
    ]).then(function(results){
        var authors = mapBooksToAuthors(results[0]);
        response.render("authors/edit_author", {layout: "authors_layout", author: authors[0], books: results[1]});
    });
});

router.post("/:author_id/books", function(request, response, next) {
    databaseConnection("book_author").insert({
        book_id: parseInt(request.body.book_id),
        author_id: parseInt(request.params.author_id)
    }).then(function(){
        response.redirect("/authors");
    });
});
router.delete("/:author_id/books/:book_id", function(request, response, next) {
    databaseConnection("book_author").delete().where({
        book_id: parseInt(request.params.book_id),
        author_id: parseInt(request.params.author_id)
    }).then(function(){
        response.redirect("/authors");
    });
});

router.post("/", function(request, response, next) {
    request.checkBody("first_name", "First name is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("last_name", "Last name is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("biography", "Biography is too long").isLength({max: 10000});
    request.checkBody("portrait_url", "Not a URL").isUrl(request.body.portrait_url);

    var errors = request.validationErrors();
    if (errors){
        response.render("error", {errors: errors});
    } else {
        databaseConnection("author").insert({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            biography: request.body.biography,
            portrait_url: request.body.portrait_url
        }).then(function(){
            response.redirect("/authors");
        });
    }
});

router.put("/:id", function(request, response, next) {
    request.checkBody("first_name", "First name is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("last_name", "Last name is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("biography", "Biography is too long").isLength({max: 10000});
    request.checkBody("portrait_url", "Not a URL").isUrl(request.body.portrait_url);

    var errors = request.validationErrors();
    if (errors){
        response.render("error", {errors: errors});
    } else {
        databaseConnection("author").update({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            biography: request.body.biography,
            portrait_url: request.body.portrait_url
        }).where("id", request.params.id).then(function(){
            response.redirect("/authors");
        });
    }
});

router.delete("/:id", function(request, response, next) {
    databaseConnection("author")
        .del()
        .where("id", request.params.id)
    .then(function(){
        response.redirect("/authors");
    });
});

module.exports = router;

function mapBooksToAuthors(records){
    var mappedAuthors = records.reduce(function(mappedAuthors, currentRecord){
        currentRecord = reassignAuthorIdToId(currentRecord);
        var authorId = currentRecord.id

        var book = extractBookFromRecord(currentRecord);
        currentRecord = deleteBookFromRecord(currentRecord);

        if (!mappedAuthors.hasOwnProperty(authorId)){
            currentRecord.books = [book];
            mappedAuthors[authorId] = currentRecord;
        } else {
            mappedAuthors[authorId].books.push(book);
        }

        return mappedAuthors;
    }, {});

    var authors = [];
    for (var authorId in mappedAuthors){
        authors.push(mappedAuthors[authorId]);
    }
    return authors;
}

function extractBookFromRecord(record){
    return {
        id: record.book_id,
        title: record.title,
        description: record.description,
        cover_url: record.cover_url,
        genre: record.genre
    };
}

function deleteBookFromRecord(record){
    var properties = [
        "book_id", "title", "genre", "description", "cover_url"
    ];

    for (var i = 0, length = properties.length; i < length; i++){
        delete record[properties[i]];
    }

    return record;
}

function reassignAuthorIdToId(record){
    record.id = record.author_id;
    delete record.author_id;
    return record;
}
