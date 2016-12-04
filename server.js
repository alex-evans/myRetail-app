'use strict'

let mongoose = require('mongoose')
let express = require('express')
let routes = require('./app/routes/index.js')
let app = express()
// let url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017'
let url = 'mongodb://aevans:GsDvs222@ds119578.mlab.com:19578/heroku_jsc0phx3'
let port = process.env.PORT || 5000

mongoose.connect(url)
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

app.use('/controllers', express.static(process.cwd() + '/app/controllers'))
app.use('/public', express.static(process.cwd() + '/public'))
app.use('/common', express.static(process.cwd() + '/app/common'))

routes(app)

app.listen(port, 'localhost', function(err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('Listening at ', port)
})
