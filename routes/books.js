const express = require("express");
const router = express.Router();
const data = require("../data/books.json");

router.get("/", (req, res) => {
    //console.log(data);
    res.status(200).json(data);
});

router.get("/:bookId", (req, res) => {
    const book = data.books.filter((book) => {
        if (book.id.toString() === req.params.bookId) {
            return book;
        }
    });
    res.status(200).json(book);
});

module.exports = router;
