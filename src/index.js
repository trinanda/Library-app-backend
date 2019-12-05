const express = require('express')
const Route = express.Router()

const books = require('./routes/books')

Route.use('/book', books)

module.exports = Route
