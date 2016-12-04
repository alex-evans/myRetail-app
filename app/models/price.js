'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let priceSchema = new Schema({
  productId: Number,
  value: String,
  currency_code: String
})

let Price = mongoose.model('Price', priceSchema)

module.exports = Price
