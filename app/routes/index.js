'use strict'

let path = process.cwd()
let ProductHandler = require(path + '/app/controllers/productHandler.server.js')

module.exports = function Products(app) {

  let productHandler = new ProductHandler()

  app.route('/')
    .get(function(req, res) {
      res.sendFile(path + '/public/index.html')
    })

  app.route('/products/:id')
    .get(productHandler.getProduct)
    .post(productHandler.postPrice)
    .put(productHandler.updatePrice)
    .delete(productHandler.deletePrice)
}
