var assert = require('assert');
var part1 = require('./part1');

describe("Part 1", function() {
  describe("isValidTriangle", function() {
    it("should reject an invalid triangle", function() {
      assert.equal(part1.isValidTriangle(5, 10, 25), false)
    })
    it("should allow an valid triangle", function() {
      assert.equal(part1.isValidTriangle(55, 55, 55), true)
    })
  })
  describe("process", function() {
    it("should get the correct count", function() {
      assert.equal(part1.process(
        `5 10 25
3 3 3`
      ), 1)
    })
    it("should get the correct count ignoring whitespace", function() {
      assert.equal(part1.process(
        `883  357  185
572  189  424
842  206  272
 55   55   55`), 2)
    })
  })
})
