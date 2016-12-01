var expect = require('chai').expect
var request = require('request')
var productHandler = require('../app/controllers/productHandler.server')
var url = "http://localhost:7770"

describe("Main Page", function() {

  it("returns status 200", function(done) {
    request(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })

})

describe("Product Request", function() {

  it("returns status 200", function(done) {
    request(url + '/products/1', function(err, res, body) {
      expect(res.statusCode).to.equal(200)
      done()
    })
  })


})
