const mongoose = require('mongoose')
const config = require('../config')

// use Node global promise
mongoose.Promise = global.Promise
mongoose.connect(config.db.url)

const { connection } = mongoose

connection.on('close', ()=> {
  console.log('MongoDB connection closed')
  process.exit(0)
})

module.exports = mongoose
