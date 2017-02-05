const Mathematician = require('../src/mathematician');
const assert = require('assert');

describe('Mathematician', function() {

  describe('sum method', function() {

    it('should return a total of parcels', function() {
      let total = Mathematician.sum(1, 1, 1, 1);
      assert.equal(total, 4);
    });

  });

  describe('subtraction method', function() {

    it('should return a total of parcels', function() {
      let total = Mathematician.subtraction(1, 1, 1, 1);
      assert.equal(total, -2);
    });

  });

});
