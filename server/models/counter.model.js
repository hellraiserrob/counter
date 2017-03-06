const mongoose = require('mongoose')
const Schema = mongoose.Schema


const counterSchema = new Schema({
    name: String,
    value: Number
})


var Counter = mongoose.model('counter', counterSchema)

module.exports = Counter
