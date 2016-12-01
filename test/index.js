var expect = require('chai').expect
var request = require('request')
var productHandler = require('../app/controllers/productHandler.server')
var url = "http://localhost:7770"

var mongoose = require('mongoose')
var Products = require('../app/models/products')

describe("Main Page", () => {

  it("returns status 200", function(done) {
    request(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

})

describe("Products", function() {

  describe("Get Product", () => {

    it("returns status 200", function(done) {
      request(url + '/products/1', function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it("returns product JSON", function(done) {
      request(url + '/products/1', function(err, res, body) {
        expect(body).to.equal('{"id":"1"}')
        done()
      })
    })
  })

})
