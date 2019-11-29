const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
require('dotenv').config()
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})
module.exports = connection

const port = 3020
app.listen(port, () => {
    console.log('This app running on port: ', port)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    connection.query('SELECT * from contact', (err, result) => {
        if (req) console.log(err)
        res.send(result);
    })
})

app.get('/categories', (req, res) => {
    connection.query('SELECT DISTINCT category from contact', (err, result) => {
        if (req) console.log(err)
        res.send(result);
    })
})

app.get('/:id', (req, res) => {
    const userId = req.params.id
    connection.query('SELECT * from contact WHERE id = ?', userId, (err, result) => {
        if (req) console.log(err)
        res.send(result);
    })
})

app.post('/', (req, res) => {
    const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category,
        created_at: new Date(),
        updated_at: new Date()
    }
    // prepared statement
    connection.query('INSERT INTO contact SET ?', data, (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})


app.patch('/update/:id', (req, res) => {
    const data = {
        name: req.body.name,
        writer: req.body.writer,
        location: req.body.location,
        category: req.body.category,
        image: req.body.image,
        updated_at: new Date()
    }
    const userId = req.params.id

    connection.query('UPDATE contact SET ? WHERE id = ?', [data, userId], (err, result) => {
        if (err) console.log(err)
        res.send(result)
    })
})

app.delete('/:id', (req, res) => {
    const userId = req.params.id

    connection.query('DELETE FROM contact WHERE id = ?', userId, (err, result) => {
        if (err) console.log(err)
        res.send(result)

    })
})