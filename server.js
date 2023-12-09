const express = require("express");
const booksRouter = require("./routes/books.js");
const countriesRouter = require("./routes/countries.js");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.use("/books", booksRouter);
app.use("/countries", countriesRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
