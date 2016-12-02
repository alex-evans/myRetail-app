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
  describe("Get Product", function() {

    it("returns status 200", function(done) {
      request(url + '/products/1', function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it("returns product JSON", function(done) {
      request(url + '/products/1', function(err, res, body) {
        expect(body).to.equal('{"_id":"1"}')
        done()
      })
    })
  })

  describe("Create Product", function() {

    it("returns status 200", function(done) {
      request.post({url: url + '/products/2', form: {_id:2}}, function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it("returns creation success", function(done) {
      request.post({url: url + '/products/3', form: {_id:3}}, function(err, res, body) {
        expect(body).to.equal('{"message":"Product successfully created!"}')
        done()
      })
    })

  })

  describe("Update Product", function() {

    it("returns status 200", function(done) {
      request.put({url: url + '/products/4'}, function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

  })

  describe("Delete Product", function() {

    it("returns status 200", function(done) {
      request.delete({url: url + '/products/5'}, function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })

  })

})
