var map =
[
  [null, null, "D", null, null],
  [null, "A", "B", "C", null],
  [5, 6, 7, 8, 9],
  [null, 2, 3, 4, null],
  [null, null, 1, null, null]
]

var mapBoundRanges = [
  // [min, max]
  [2, 2],
  [1, 3],
  [0, 4],
  [1, 3],
  [2, 2]
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
        y = limitToRange(x, y)
        break
      case LEFT:
        x -= 1
        x = limitToRange(y, x)
        break
      case DOWN:
        y -= 1
        y = limitToRange(x, y)
        break
      case RIGHT:
        x += 1
        x = limitToRange(y, x)
        break
      }
  })
  return [x, y]
}

function limitToRange(oppositeAxis, v) {
  // Because the keypad is a symetrical star, we only need one function.
  // The value is limited to the range according to the other coordinate.
  // e.g. if x is the value to limit, y will be the other coordinate.
  var min = mapBoundRanges[oppositeAxis][0]
  var max = mapBoundRanges[oppositeAxis][1]
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


/*
[2, 2]
[1, 3]
[0, 4]
[1, 3]
[2, 2]
*/
