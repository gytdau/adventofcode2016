var assert = require('assert');
var part1 = require('./part1');


describe("Part 1", function() {
  describe("seperateIntoArguments", function() {
    it("should seperate arguments", function() {
      assert.deepEqual(part1.seperateIntoArguments("label-111[abcde]"), {
        name: "label",
        sectorID: 111,
        checksum: "abcde"
      })
    })
    it("should ignore dashes in the name", function() {
      assert.deepEqual(part1.seperateIntoArguments("label-part-deux-111[abcde]"), {
        name: "labelpartdeux",
        sectorID: 111,
        checksum: "abcde"
      })
    })
  })
  describe("frequencySort", function() {
    it("should sort by frequency", function() {
      assert.deepEqual(part1.alphabeticalSort("aaabb"),
        [ "a", "b" ]
      )
    })
    it("should allow ties", function() {
      assert.deepEqual(part1.alphabeticalSort("aabbc"),
      [ ["a", "b"], "c"]
    )
  })
  it("should alphabetically sort in tied groups", function() {
    assert.deepEqual(part1.alphabeticalSort("bbaacc"),
    [ ["a", "b", "c"]]
  )
})
  })
  describe("generateChecksum", function() {
    it("should generate a checksum correctly", function() {
      assert.equal(part1.generateChecksum(["a", "b", "c", "d", "e"]), "abcde")
    })
    it("should generate a checksum correctly with tied groups", function() {
      assert.equal(part1.generateChecksum([["a", "b"], "c", "d", "e"]), "abcde")
    })
    it("should limit checksums to 5 characters", function() {
      assert.equal(part1.generateChecksum([["n", "e"], "l", "d", "e", "f", "g"]), "nelde")
    })
  })
})
