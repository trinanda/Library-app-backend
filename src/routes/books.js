const express = require('express')
const Route = express.Router()

const booksController = require('../controllers/books')

Route
  .get('/all', booksController.getBooks)
  .get('/:id', booksController.bookDetails)
  .get('/categories', booksController.booksCategory)
  .get('/categories/:category', booksController.filterBooksByCategory)
  .post('/', booksController.addBook)

module.exports = Route
