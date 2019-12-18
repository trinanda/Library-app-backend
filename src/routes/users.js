const Route = require('express').Router()

const usersController = require('../controllers/users')

Route
  .post('/', usersController.addUser)

module.exports = Route