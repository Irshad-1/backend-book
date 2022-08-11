const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String,
    rating: String,
    voters: String,
    price: String,
    currency: String,
    description: String,
    publisher: String,
    page_count: String,
    generes: String,
    ISBN: { type: String, required: true },
    language: String,
    published_date: String
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
