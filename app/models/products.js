'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Product = new Schema(
  { id: String },
  { name: String },
  { current_price:
      { value: Number,
        currency_code: String }},
)
