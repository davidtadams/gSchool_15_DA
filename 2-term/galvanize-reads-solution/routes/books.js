var express = require("express");
var router = express.Router();
var databaseConnection = require("../database_connection");

router.get("/new", function(request, response, next) {
    response.render("books/add_book", {layout: "books_layout"});
});

router.get("/:id", function(request, response, next) {
    databaseConnection("book")
        .select()
        .innerJoin("book_author", "book.id", "book_id")
        .innerJoin("author", "author_id", "author.id")
        .where("book.id", request.params.id)
    .then(function(books){
        var books = mapAuthorsToBooks(books);
        response.render("books/get_book", {layout: "books_layout", book: books[0]});
    });
});

router.get("/", function(request, response, next) {
    databaseConnection("book")
        .select()
        .innerJoin("book_author", "book.id", "book_id")
        .innerJoin("author", "author_id", "author.id")
    .then(function(records){
        var books = mapAuthorsToBooks(records);
        response.render("books/list_books", {layout: "books_layout", books: books});
    });
});

router.get("/delete/:id", function(request, response, next) {
    databaseConnection("book")
        .select()
        .innerJoin("book_author", "book.id", "book_id")
        .innerJoin("author", "author_id", "author.id")
        .where("book.id", request.params.id)
    .then(function(books){
        var books = mapAuthorsToBooks(books);
        response.render("books/delete_book", {layout: "books_layout", book: books[0]});
    });
});

router.get("/edit/:id", function(request, response, next) {
    Promise.all([
        databaseConnection("book").select()
            .innerJoin("book_author", "book.id", "book_id")
            .innerJoin("author", "author_id", "author.id")
            .where("book.id", request.params.id),
        databaseConnection("author").select()
    ]).then(function(results){
        var books = mapAuthorsToBooks(results[0]);
        response.render("books/edit_book", {layout: "books_layout", book: books[0], authors: results[1]});
    });
});

router.post("/:book_id/authors", function(request, response, next) {
    databaseConnection("book_author").insert({
        book_id: parseInt(request.params.book_id),
        author_id: parseInt(request.body.author_id)
    }).then(function(){
        response.redirect("/books");
    });
});
router.delete("/:book_id/authors/:author_id", function(request, response, next) {
    databaseConnection("book_author").delete().where({
        book_id: parseInt(request.params.book_id),
        author_id: parseInt(request.params.author_id)
    }).then(function(){
        response.redirect("/books");
    });
});

router.post("/", function(request, response, next) {
    request.checkBody("title", "Title is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("genre", "Genre is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("description", "Description is missing or too long").notEmpty().isLength({max: 2000});
    request.checkBody("cover_image_url", "Not a URL").isUrl(request.body.cover_url);

    var errors = request.validationErrors();
    if (errors){
        response.render("error", {errors: errors});
    } else {
        databaseConnection("book").insert({
            title: request.body.title,
            genre: request.body.genre,
            description: request.body.description,
            cover_url: request.body.cover_image_url
        }).then(function(){
            response.redirect("/books");
        });
    }
});

router.put("/:id", function(request, response, next) {
    request.checkBody("title", "Title is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("genre", "Genre is empty or too long").notEmpty().isLength({max: 255});
    request.checkBody("description", "Description is missing or too long").notEmpty().isLength({max: 10000});
    request.checkBody("cover_image_url", "Not a URL").isUrl(request.body.cover_url);

    var errors = request.validationErrors();
    if (errors){
        response.render("error", {errors: errors});
    } else {
        databaseConnection("book").update({
            title: request.body.title,
            genre: request.body.genre,
            description: request.body.description,
            cover_url: request.body.cover_image_url
        }).where("id", request.params.id).then(function(){
            response.redirect("/books");
        });
    }
});

router.delete("/:id", function(request, response, next) {
    console.log("got to delete");
    databaseConnection("book")
        .del()
        .where("id", request.params.id)
    .then(function(){
        response.redirect("/books");
    });
});

module.exports = router;

function mapAuthorsToBooks(records){
    var mappedBooks = records.reduce(function(mappedBooks, currentRecord){
        currentRecord = reassignBookIdToId(currentRecord);
        var bookId = currentRecord.id

        var author = extractAuthorFromRecord(currentRecord);
        currentRecord = deleteAuthorFromRecord(currentRecord);

        if (!mappedBooks.hasOwnProperty(bookId)){
            currentRecord.authors = [author];
            mappedBooks[bookId] = currentRecord;
        } else {
            mappedBooks[bookId].authors.push(author);
        }

        return mappedBooks;
    }, {});

    var books = [];
    for (var bookId in mappedBooks){
        books.push(mappedBooks[bookId]);
    }
    return books;
}

function extractAuthorFromRecord(record){
    return {
        id: record.author_id,
        first_name: record.first_name,
        last_name: record.last_name,
        biography: record.biography,
        portrait_url: record.portrait_url
    };
}

function deleteAuthorFromRecord(record){
    var properties = [
        "author_id", "first_name", "last_name", "biography", "portrait_url"
    ];

    for (var i = 0, length = properties.length; i < length; i++){
        delete record[properties[i]];
    }

    return record;
}

function reassignBookIdToId(record){
    record.id = record.book_id;
    delete record.book_id;
    return record;
}
