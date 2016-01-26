exports.seed = function(knex, Promise){
    return Promise.all([
        knex("author").del(),
        knex("book_author").del()
    ]).then(function(){
        return Promise.all([
            knex("author").insert({
                first_name: "Alex",
                last_name: "Martelli",
                biography: "Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Goteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg"
            }).returning("id"),
            knex("author").insert({
                first_name: "Anna",
                last_name: "Ravenscroft",
                biography: "Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg"
            }).returning("id"),
            knex("author").insert({
                first_name: "Steve",
                last_name: "Holden",
                biography: "Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of \"Python Web Programming\", the O'Reilly School of Technology's \"Certificate series in Python\" and O'Reilly Media's \"Intermediate Python\" video series.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg"
            }).returning("id"),
            knex("author").insert({
                first_name: "Allen B.",
                last_name: "Downey",
                biography: "Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg"
            }).returning("id"),
            knex("author").insert({
                first_name: "Bonnie",
                last_name: "Eisenman",
                biography: "Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg"
            }).returning("id"),
            knex("author").insert({
                first_name: "Kyle",
                last_name: "Simpson",
                biography: "Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",
                portrait_url: "https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg"
            }).returning("id")
        ]);
    }).then(function(authorIds){
        var authorIds = authorIds.map(function(currentId){
            return currentId[0]; // each authorId is stored as an single-element array
        });
        var bookAuthors = [{
            bookTitle: "Python In A Nutshell",
            authorId: authorIds[0]
        },{
            bookTitle: "Python In A Nutshell",
            authorId: authorIds[1]
        },{
            bookTitle: "Python In A Nutshell",
            authorId: authorIds[2]
        },{
            bookTitle: "Think Python",
            authorId: authorIds[3]
        },{
            bookTitle: "Learning React Native",
            authorId: authorIds[4]
        },{
            bookTitle: "You Don't Know JS: ES6 & Beyond",
            authorId: authorIds[5]
        },{
            bookTitle: "You Don't Know JS: Scope & Closures",
            authorId: authorIds[5]
        },{
            bookTitle: "You Don't Know JS: Async & Performance",
            authorId: authorIds[5]
        }];

        return Promise.all(bookAuthors.map(function(currentBookAuthor){
            return getBookIdByTitle(currentBookAuthor.bookTitle, knex, Promise).then(function(book){
                return insertBookAuthor(book.id, currentBookAuthor.authorId, knex, Promise);
            });
        }))
    });
}

function getBookIdByTitle(bookTitle, knex, Promise){
    return new Promise(function(resolve, reject){
        knex("book").select("id").where("title", bookTitle).then(function(books){
            resolve(books[0]);
        });
    });
}

function insertBookAuthor(bookId, authorId, knex, Promise){
    return new Promise(function(resolve, reject){
        knex("book_author").insert({
            book_id: parseInt(bookId),
            author_id: parseInt(authorId)
        }).then(function(){
            resolve();
        });
    });
}
