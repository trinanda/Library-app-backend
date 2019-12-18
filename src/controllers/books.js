const bookModels = require('../models/Book')

module.exports = {
  getBooks: (req, res) => {
    bookModels.getBooks()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  booksCategory: (req, res) => {
    bookModels.booksCategory()
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  filterBooksByCategory: (req, res) => {
    const category = req.params.category
    bookModels.filterBooksByCategory(category)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  bookDetails: (req, res) => {
    const userId = req.params.id
    bookModels.bookDetails(userId)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addBook: (req, res) => {
    const {
      title,
      author,
      publisher,
      description,
      category,
      thumbnail,
    } = req.body

    const data = {
      title,
      author,
      publisher,
      description,
      category,
      thumbnail,
      created_at: new Date(),
      updated_at: new Date(),

    }
    bookModels.addBook(data)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
