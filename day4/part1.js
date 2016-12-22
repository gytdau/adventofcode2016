function process(input) {
  var count = 0;
  input = input.split("\n")
  input.forEach(function (line) {
    if(line === "") {
      return
    }
    args = seperateIntoArguments(line)
    correctChecksum = generateChecksum(frequencySort(args.name))
    if(args.checksum == correctChecksum) {
      count += parseInt(args.sectorID)
    }
  })

  return count
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
  var counts = {}
  // e.g. {"a": 3} when a has 3 occurences
  for (var i = 0, len = name.length; i < len; i++) {
    if(name[i] in counts) {
      counts[name[i]] += 1
    } else {
      counts[name[i]] = 1
    }
  }

  var reverseCounts = []
  // e.g. [3: ["a"]] when a has 3 occurences
  // e.g. [3: ["a", "b"]] when both a and b have 3 occurences each
  for(var character in counts) {
    if(reverseCounts[counts[character]] == undefined) {
      reverseCounts[counts[character]] = [character]
    } else {
      reverseCounts[counts[character]].push(character)
    }
  }

  // Remove blank elements
  // e.g.
  // [ 3: ["a"], 6: ["b"]]
  // becomes
  // [["a"], ["b"]]
  // which is technically the same as
  // [ 0: ["a"], 1: ["b"]]
  reverseCounts = reverseCounts.filter(Array)

  // Reverse the array to make it descending in occurences (it was in ascending order)
  reverseCounts.reverse()

  // Sort the arrays in the main array (so that it's in alphabetical order)
  // e.g.
  // [["b", "a"]]
  // should be
  // [["a", "b"]]
  for(var i = 0; i < reverseCounts.length; i++) {
    reverseCounts[i].sort();
  }

  // Now after all that, we're done! :)
  return reverseCounts
}
function generateChecksum(sorted) {
  //                     vvvvvvvvvvvvvvvv   - this is terrible ;P
  return sorted.join("").replace(/,/g, '').substring(0, 5)
}

module.exports = {process, seperateIntoArguments, frequencySort, generateChecksum}
