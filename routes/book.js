const express = require("express");
const {

    addBook, searchByTitle, searchByISBN, getAllBooks
} = require("../handlers/book");

const bookRouter = express.Router();

bookRouter.get('/book/title/:title', searchByTitle);
bookRouter.get('/book/ISBN/:ISBN', searchByISBN);
bookRouter.post('/book', addBook);
bookRouter.get('/book', getAllBooks);


module.exports = bookRouter;
