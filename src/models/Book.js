const connection = require('../configs/db')

module.exports = {
  getBooks: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM book', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  booksCategory: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT DISTINCT category FROM book', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  filterBooksByCategory: (category) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM book WHERE book.category = ?', category, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  bookDetails: (book_id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * from book WHERE id = ?', book_id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  addBook: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO book SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}
