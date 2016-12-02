'use strict'

let Products = require('../models/products.js')

function ProductHandler() {

  this.postProduct = function(req, res) {

    let newProduct = Products({
      _id: req.params.id,
      name: "The Big Lebowksi (Blu-ray) (Widescreen)"
    })

    newProduct.save(function(err) {
      if(err) throw err
      return res.json({message: "Product successfully created!"})
    })

  }

  this.getProduct = function(req, res) {
    let name = getName()
    return res.json({_id: req.params.id})
  }

  this.updateProduct = function(req, res) {
    return res.json({message: "Product successfully updated!"})
  }

  this.deleteProduct = function(req, res) {
    return res.json({message: "Product successfully deleted!"})
  }

}

function getName() {
  return {"name":"alex2"}
}

module.exports = ProductHandler
