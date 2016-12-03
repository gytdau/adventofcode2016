function isValidTriangle(x, y, z) {
  // Forgetting to parseInt() took me a good hour to figure out. Lesson learned!
  x = parseInt(x)
  y = parseInt(y)
  z = parseInt(z)
  return ((x + y) > z) && ((x + z) > y) && ((y + z) > x)
}

function mapToSet(threeLines) {
  var sides = threeLines.trim().split(/\s+/)
  return [
    [ sides[0], sides[3], sides[6]],
    [ sides[1], sides[4], sides[7]],
    [ sides[2], sides[5], sides[8]]
  ]
}
function process(input) {
  var result = 0
  var lines = input.split("\n")

  for(line = 0; line < lines.length; line += 3) {
    var linesToProcess = lines[line] + ' ' + lines[line + 1] + ' ' + lines[line + 2]
    mapToSet(linesToProcess).forEach(function(triangle) {
      result += isValidTriangle(triangle[0], triangle[1], triangle[2]) ? 1 : 0
    })
  }
  return result
}

module.exports = { isValidTriangle, process, mapToSet }
