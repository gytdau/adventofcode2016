var part1 = require('./part1')
var part2 = require('./part2')



var fs = require('fs');

var input = fs.readFileSync('input.txt', 'utf8');

console.log(
  'Part 1 Answer:', part1.process(input))
  console.log(
  'Part 2 Answer Table - Pick out the one you need'
  )
  part2.process(input)
