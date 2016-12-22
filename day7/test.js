var assert = require('assert');
var part1 = require('./part1');
var part2 = require('./part2');


describe("Part 1", function() {
  describe("supportsTLS", function() {
    it("should return false when no ABBA is found", function() {
      assert.equal(part1.supportsTLS("aaa[bbb]ccc"), false)
    })
    it("should return true when an ABBA is found outside hypernet sequences", function() {
      assert.equal(part1.supportsTLS("abba[bbb]ccc"), false)
    })
    it("should return true when two ABBAs are found outside hypernet sequences", function() {
      assert.equal(part1.supportsTLS("abba[bbb]cbbc"), true)
    })
    it("should return false when two ABBAs are found both inside and outside hypernet sequences", function() {
      assert.equal(part1.supportsTLS("abba[cbbc]ccc"), false)
    })
  })
  describe("seperate", function() {
    it("should seperate correctly", function() {
      assert.equal(part1.seperate("aaa[bbb]ccc"), ["aaa", "bbb", "ccc"])
    })
    it("should tolerate variable lengths", function() {
      assert.equal(part1.seperate("abcdef[a]abc"), ["abcdef", "a", "abc"])
    })
  })
  describe("containsABBA", function() {
    it("should find an ABBA", function() {
      assert.equal(part1.containsABBA("abcdeedfg"), true)
    })
    it("should not find an ABBA", function() {
      assert.equal(part1.containsABBA("abcdefdfg"), false)
    })
  })
  describe("isABBA", function() {
    it("should detect an ABBA", function() {
      assert.equal(part1.isABBA("xyyx"), true)
    })
    it("should detect a non-ABBA", function() {
      assert.equal(part1.isABBA("anea"), false)
    })
  })
})
