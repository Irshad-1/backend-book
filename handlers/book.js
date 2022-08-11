
const Book = require("../database/book");

async function addBook(req, res) {
    try {
        let { bookData } = req.body;
        await Book.create(bookData);
        return res.status(201).send("Book details added successfully");
    } catch (error) {
        return res.status(400).send(error);
    }
}

async function searchByTitle(req, res) {
    let { title } = req.params;
    try {
        const bookData = await Book.find({ title: title });
        return res.send({
            data: bookData,
        });
    } catch (error) {
        throw error
    }
}
async function searchByISBN(req, res) {
    let { ISBN } = req.params;
    try {
        const bookData = await Book.find({ ISBN: ISBN });
        return res.send({
            data: bookData,
        });
    } catch (error) {
        throw error
    }
}
async function getAllBooks(req, res) {
    try {
        const bookData = await Book.find();
        return res.send(bookData);
    } catch (error) {
        throw error
    }
}

module.exports = { addBook, searchByISBN, searchByTitle, getAllBooks };