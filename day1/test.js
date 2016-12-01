var assert = require('assert');
var index = require('./index');

describe('Day 1', function() {
  describe('rotate', function() {
    it('should rotate left correctly', function() {
      assert.equal(index.rotate('L', 2), 1);
    });
    it('should rotate left and tick over to the other side', function() {
      assert.equal(index.rotate('L', 0), 3);
    });
    it('should rotate right correctly', function() {
      assert.equal(index.rotate('R', 2), 3);
    });
    it('should rotate right and tick over to the other side', function() {
      assert.equal(index.rotate('R', 3), 0);
    });
  });
  describe('travel', function() {
    it('should travel north', function() {
      var travelResult = index.travel(0, 3, 0, 0)
      assert.equal(travelResult[0], 0);
      assert.equal(travelResult[1], 3);
    });
    it('should travel backwards onto itself', function() {
      var travelResult = index.travel(2, 4, 1, 5)
      /*
      Plotted on a graph, from point X to Y:
      | X
      | |
      | v
      | Y
      |----------
      
      */
      assert.equal(travelResult[0], 1);
      assert.equal(travelResult[1], 1);
    });
  });
});