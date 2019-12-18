const express = require('express')
const Route = express.Router()

const books = require('./routes/books')
const users = require('./routes/users')

Route.use('/books', books)
Route.use('/users', users)

module.exports = Route
