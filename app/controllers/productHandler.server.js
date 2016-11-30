'use strict'

function ProductHandler() {

  this.getName = function(req, res) {
    return res.json({"alex":"test"})
  }
}

module.exports = ProductHandler
