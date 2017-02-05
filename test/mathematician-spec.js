const Mathematician = require('../src/mathematician');
let assert = require('chai').assert;
require('chai').should();

describe('Mathematician', function() {

  describe('sum method', function() {

    it('should return a total of parcels', function() {
      let total = Mathematician.sum(1, 1, 1, 1);
      assert.equal(total, 4);
    });

    it('Should throw error when parameter is invalid', function() {
      (function() {
        let total = Mathematician.sum([1, 2]);
      }).should.throw();
    });

  });

  describe('subtraction method', function() {

    it('should return a total of parcels', function() {
      let total = Mathematician.subtraction(1, 1, 1, 1);
      assert.equal(total, -2);
    });

  });

  describe('multiply method', function() {

    it('should return a total of parcels', function() {
      let total = Mathematician.multiply(1, 1, 1, 1);
      assert.equal(total, 1);
    });

  });

  describe('constructor method', function() {

    it('should not throw an error', function() {
      (function() {
        let mathematician = new Mathematician();
      }).should.throw();
    });

  });

});
