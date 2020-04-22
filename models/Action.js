const mongoose = require('mongoose')
const {Schema} = mongoose

const actionSchema = new Schema({
    'deviceId': String,
    'transactionId': String,
    'productCode': String,
    'product.name': String,
    'product.form' : String,
    'product.dose' : String,
    'product.producer' : String,
    'tag': String,
    'created': Date,
})

const Action = mongoose.model('action', actionSchema)
module.exports = Action