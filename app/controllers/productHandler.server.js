'use strict'

let Products = require('../models/products.js')
let rp = require('request-promise')

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
    // need to get product name first
    let nameUrl = 'http://redsky.target.com/'
    let nameVersion = 'v1/pdp/tcin/'
    let nameId = req.params.id
    let nameOpts = '?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics'

    let options = {
      method: 'GET',
      uri: nameUrl + nameVersion + nameId + nameOpts,
      json: true
    }

    rp(options)
      .then(function(rtn) {
        return rtn.product.item.product_description.title
      })
      .then(function(productName) {
        let product = {
          id: req.params.id,
          name: productName,
          current_price: {
            value: 1,
            currency_code: "test"
          }
        }
        return res.json(product)
      })
      .catch(function(err) {
        throw err
      })
    /*
    let product = {
      id: req.params.id,
      name: getName(req.params.id),
      current_price: getPrice()
    }
    return res.json(product)
    */
  }

  function getName(id) {

    console.log(nameUrl + nameVersion + nameId + options)
    request(nameUrl + nameVersion + nameId + options, function(err, res, body) {
      if(err) throw err
      let productInfo = JSON.parse(body)
      return productInfo.name
    })
  }

  this.updateProduct = function(req, res) {
    return res.json({message: "Product successfully updated!"})
  }

  this.deleteProduct = function(req, res) {
    return res.json({message: "Product successfully deleted!"})
  }

}


function getPrice() {
  return {value: 13.49,currency_code: "USD"}
}

module.exports = ProductHandler
