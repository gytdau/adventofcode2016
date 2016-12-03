var assert = require('assert');
var part1 = require('./part1');
var part2 = require('./part2');

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

describe("Part 2", function () {
  describe("mapToSet", function() {
    it("should map correctly", function() {
      assert.deepEqual(part2.mapToSet(`883  357  185
572  189  424
842  206  272`), [['883', '572', '842'], ['357', '189', '206'], ['185', '424', '272']])
    })
  })
  describe("process", function() {
    it("should get the correct count", function() {
      assert.equal(part2.process(`10 20 30
10 30 30
10 90 30`), 2)
    })
  })
})
