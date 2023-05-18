const Book = require("./model") 

const addBook = async (req, res) =>{
    try {
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })

        res.status(201).json({message: "Book successfully created", book: newBook})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
} 

const getBook = async (req, res) => {
    try {
        const books = await Book.findAll()
        res.status(201).json({message: "Books Retrieved", books: books})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const updateBook = async(req, res) =>{
    try {
        const updateBook = await Book.update(
            {
                author: req.body.newAuthor
            }, {
                where: {
                    title: req.body.title
                }
            }
        )
        res.status(200).json({message: "Book successfully updated", updateResult: updateBook})
    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Book.destroy({
            where:{
                title: req.body.title
            }
        })
        res.status(201).json({message: "Book successfully deleted", book: deleteBook})

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

const deleteAll = async (req, res) => {
    try {
        const deleteAll = await Book.destroy({truncate: true})
        res.status(201).json({message: "All books have been successfully deleted"})

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
        console.log(error)
    }
}

module.exports = {
    addBook,
    getBook,
    updateBook,
    deleteBook,
    deleteAll
}