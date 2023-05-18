require("dotenv").config();

const express = require("express");

const Book = require("./books/model")

const bookRoutes = require("./books/routes")

const port = 5001

const app = express();

app.use(express.json())

const syncTables = () => {
    Book.sync()
}

app.use(bookRoutes)

app.get("/health", (req, res) =>{
    res.status(200).json({message: "Server is running successfully"})
    console.log("Server is running successfully.")
})

app.listen(port, () => {
    syncTables()
    console.log("Server is listening")
})