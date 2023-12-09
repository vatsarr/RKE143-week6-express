const express = require("express");
const app = express();
const port = 3000;
const data = require("./data/books.json");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/books", (req, res) => {
    console.log(data);
    res.status(200).json(data);
});

app.get("/books/:bookId", (req, res) => {
    const book = data.books.filter((book) => {
        if (book.id.toString() === req.params.bookId) {
            return book;
        }
    });
    res.status(200).json(book);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
