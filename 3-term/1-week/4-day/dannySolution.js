const constructCollection = (args) => {//collection, item, id, transformer) => {
	if (typeof args.collection[args.id] === 'undefined') {
		args.collection[args.id] = args.transformer(args.item);
	}
	return args.collection;
};

const normalizeBooks = (books, book) => {
	constructCollection({
		collection: books,
		item: book,
		id: book.book_id,
		transformer: (book) => {
		  return {
			  id: book.book_id,
			  title: book.title,
			  description: book.description,
			  genre: book.genre,
			  cover: book.cover,
			  authors: []
		  };
		}
	});
	if (typeof books[book.book_id].authors[book.author_id] === 'undefined') {
		books[book.book_id].authors.push(book.author_id);
	}
	return books;
};

const normalizeAuthors = (authors, book) => {
	return constructCollection({
		collection: authors,
		item: book,
		id: book.author_id,
		transformer: (author) => {
		  return {
			  first_name: book.first_name,
			  last_name: book.last_name,
			  id: book.author_id,
			  portrait: book.portrait
		  };
		}
	});
};

const combineBooksAndAuthors = (books, authors) => {
	return books.reduce((books, book) => {
	  book.authors = book.authors.map(authorId => authors[authorId]);
		books.push(book);
		return books;
	}, []);
};

const parseBooks = (data) => {
  const books = data.data.reduce(normalizeBooks, []);
	const authors = data.data.reduce(normalizeAuthors, []);
  return combineBooksAndAuthors(books, authors);
};

$.get('https://salty-thicket-7816.herokuapp.com/books/unformatted')
.then(parseBooks)
.then(function (data) {
	console.log(data);
});
