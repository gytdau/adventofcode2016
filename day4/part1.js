function process(input) {

}
function seperateIntoArguments(line) {
  var regex = /([a-z\-]+)-([0-9]+)\[([a-z]+)\]/
  var matches = line.match(regex)
  return {
    name: matches[1].replace(/-/g, ""),
    sectorID: matches[2],
    checksum: matches[3]
  }
}
function frequencySort(name) {

}
function generateChecksum(sorted) {

}

module.exports = {process, seperateIntoArguments, frequencySort, generateChecksum}
