var map =
[
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3]
]

var UP = "U"
var LEFT = "L"
var RIGHT = "R"
var DOWN = "D"

function move(command, x, y) {
  command.split('').forEach(function (char) {
    switch(char) {
      case UP:
        y += 1
        break
      case LEFT:
        x -= 1
        break
      case DOWN:
        y -= 1
        break
      case RIGHT:
        x += 1
        break
      }
    x = limitToRange(x, 0, 2)
    y = limitToRange(y, 0, 2)
  })
  return [x, y]
}

function limitToRange(v, min, max) {
    return (Math.min(max, Math.max(min, v)))
}

function process (input) {
  input = input.split("\n")
  var x = 1
  var y = 1
  var code = ''
  input.forEach(function (line) {
    var result = move(line, x, y)
    x = result[0]
    y = result[1]
    // Arrays don't make good 2D maps: they have to be flipped.
    code += '' + map[y][x]
  })
  return code
}
module.exports = { process, move }
