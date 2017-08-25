import mongoose from './'

const { Schema } = mongoose

module.exports = mongoose.model('Event', Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    // required: true
  }
}))
