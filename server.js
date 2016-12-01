'use strict'

let mongoose = require('mongoose')
let express = require('express')
let routes = require('./app/routes/index.js')
let app = express()
let url = 'mongodb://localhost:27017'

mongoose.connect(url)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use('/controllers', express.static(process.cwd() + '/app/controllers'))
app.use('/public', express.static(process.cwd() + '/public'))
app.use('/common', express.static(process.cwd() + '/app/common'))

routes(app)

app.listen(7770, 'localhost', function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:7770')
})
