const mongoose = require('mongoose')
const {Schema} = mongoose

const messageSchema = new Schema({
  'title': String,
  'text': String
})

const Message = mongoose.model('messages', messageSchema)
module.exports = Message