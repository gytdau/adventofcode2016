var assert = require('assert');
var part1 = require('./part1');

describe('Part 1', function(){
  describe('move', function() {
    it('should work with simple directions', function() {
      assert.deepEqual(part1.move('U', 1, 1), [1, 2])
    })
    it('should work with complex directions', function() {
      assert.deepEqual(part1.move('URDD', 1, 1), [2, 0])
    })
    it('should prevent leaving the bounds', function() {
      assert.deepEqual(part1.move('URDDDD', 1, 1), [2, 0])
    })
  })
  describe('process', function() {
    it('should work with one-line directions', function() {
      assert.equal(part1.process('ULL'), '1')
    })
    it('should work with long directions', function() {
      assert.equal(part1.process(
        `ULL
RRDDD
LURDL
UUUUD`
      ), '1985')
    })
  })
})
