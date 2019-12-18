const userModels = require('../models/User')
const {
  registerValidation
} = require('../validation')

module.exports = {
  addUser: (req, res) => {
    // Lets validate
    const {
      error
    } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const {
      email,
      password
    } = req.body

    const data = {
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    }
    userModels.addUser(data)
      .then(result => {
        res.json(result)
        console.log(result)
      })
      .catch(() => {
        return res.status(400).send('Email already exists')
      })
  }
}