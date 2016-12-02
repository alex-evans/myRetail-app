'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let productsSchema = new Schema({
  _id: Number,
  name: String
})

let Products = mongoose.model('Product', productsSchema)

module.exports = Products
