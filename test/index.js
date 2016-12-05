var expect = require('chai').expect
var rp = require('request-promise')
var productHandler = require('../app/controllers/productHandler.server')
var url = "http://localhost:5000"

var mongoose = require('mongoose')
var Price = require('../app/models/price')

describe("Main Page", () => {

  it("returns status 200", function(done) {
    rp(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

})

describe("Products", function() {

  describe("Get Product", function() {

    it("returns status 200", function(done) {
      rp(url + '/products/13860428', function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it("returns product JSON", function(done) {
      rp(url + '/products/13860428', function(err, res, body) {
        var product = JSON.parse(body)
        expect(product.id).to.equal('13860428')
        expect(product.name).to.equal('The Big Lebowski (Blu-ray)')
        expect(product.current_price.value).to.equal('13.49')
        expect(product.current_price.currency_code).to.equal('USD')
        done()
      })
    })

  })

})

describe("Price", function() {

  describe("Create Price", function() {

    it("returns status 200", function(done) {
      rp.post({url: url + '/products/2'}, function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it("returns creation success", function(done) {
      rp.post({url: url + '/products/3'}, function(err, res, body) {
        expect(body).to.equal('{"message":"Price successfully created!"}')
        done()
      })
    })

  })

})
