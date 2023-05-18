const { Router } = require("express")

const bookRouter = Router()

const {addBook} = require("./controllers")
const {getBook} = require("./controllers")
const {updateBook} = require("./controllers")
const {deleteBook} = require("./controllers")
const {deleteAll} = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getBookList", getBook)
bookRouter.put("/books/updateBook", updateBook)
bookRouter.delete("/books/deleteBook", deleteBook)
bookRouter.delete("/books/deleteAll", deleteAll)


module.exports = bookRouter