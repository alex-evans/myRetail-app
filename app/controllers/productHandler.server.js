'use strict'

let Products = require('../models/products.js')

function ProductHandler() {

  this.postProduct = function(req, res) {

    let newProduct = {
      _id: req.params.id,
      name: req.params.name
    }

    Products
              .insert(newProduct, function(err, data) {
                if(err) throw err
                res.json({ message: "Product successfully created!", newProduct })
              })

  }

  this.getProduct = function(req, res) {
    let name = getName()
    return res.json({id: req.params.id})
  }

  this.updateProduct = function(req, res) {

    Products
              .update({
                _id: req.params.id
              }, {
                $set: {
                  name: req.params.name
                }
              }, function(err, data) {
                if(err) res.send(err)
                res.json({ message: "Product updated!", data })
              })

  }

  this.deleteProduct = function(req, res) {

    Products
              .remove({
                _id: req.params.id
              }, function(err, data) {
                if(err) res.send(err)
                res.json({ message: "Product removed!", data })
              })

  }

}

function getName() {
  return {"name":"alex2"}
}

module.exports = ProductHandler
