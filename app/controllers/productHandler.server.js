'use strict'

let Price = require('../models/price.js')
let rp = require('request-promise')

function ProductHandler() {

  this.postPrice = function(req, res) {

    // TODO: add a check to see if ProductID already exists
    // TODO: use data sent with the post instead of hardcoded data

    let newPrice = Price({
      productId: req.params.id,
      value: '13.49',
      currency_code: 'USD'
    })

    newPrice.save(function(err) {
      if(err) throw err
      return res.json({message: "Price successfully created!"})
    })

  }

  this.getProduct = function(req, res) {
    let productId = req.params.id
    let productApiUrl = 'http://redsky.target.com/'
    let productApiVersion = 'v1/pdp/tcin/'
    let productApiOpts = '?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics'

    let options = {
      method: 'GET',
      uri: productApiUrl + productApiVersion + productId + productApiOpts,
      json: true
    }

    rp(options)
      .then(function(apiData) {
        let productApiName = apiData.product.item.product_description.title

        Price.find({productId:productId}).exec(function(err, priceArray) {
          if(err) throw err

          let price = priceArray[0]

          let product = {
            id: productId,
            name: productApiName,
            current_price: {
              value: price.value,
              currency_code: price.currency_code
            }
          }

          return res.json(product)

          })
      })

      .catch(function(err) {
        throw err
      })

  }

  this.updatePrice = function(req, res) {
    // TODO: Update Price

    return res.json({message: "Price successfully updated!"})
  }

  this.deletePrice = function(req, res) {
    // TODO: Delete Price

    return res.json({message: "Price successfully deleted!"})
  }

}

module.exports = ProductHandler
