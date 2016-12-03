function isValidTriangle(x, y, z) {
  // Forgetting to parseInt() took me a good hour to figure out. Lesson learned!
  x = parseInt(x)
  y = parseInt(y)
  z = parseInt(z)
  return ((x + y) > z) && ((x + z) > y) && ((y + z) > x)
}

function process(input) {
  var result = 0
  input.split("\n").forEach(function(triangle) {
    var sides = triangle.trim().split(/\s+/)
    result += isValidTriangle(sides[0], sides[1], sides[2]) ? 1 : 0
  })
  return result
}

module.exports = { isValidTriangle, process}
