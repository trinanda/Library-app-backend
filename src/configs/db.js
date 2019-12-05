const mysql = require('mysql')
const config = require('./configs')

const connection = mysql.createConnection(config.database.mysql)

connection.connect((err) => {
  if (err) console.log('Error: ${err}')
  console.log('\n DB connected! \n')
})

module.exports = connection
