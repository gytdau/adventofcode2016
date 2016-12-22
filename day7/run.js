var part1 = require('./part1')
var part2 = require('./part2')

var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8');

console.log('Part 1 Answer:', part1.process(input))
