const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;


function rotate(side, direction) {
  direction += (side == 'L' ? -1 : 1)
  direction = (direction < 0 ? 3 : direction)
  direction = (direction > 3 ? 0 : direction)  
  return direction;
}

function travel(direction, distance, x, y) {
  distance = parseInt(distance);
  switch(direction) {
    case NORTH:
      y += distance
      break;
    case EAST:
      x += distance
      break;
    case SOUTH:
      y -= distance
      break;
    case WEST:
      x -= distance
      break;
  }
  return [x, y]
}

function process(problem) {
    var x = 0;
    var y = 0;
    var direction = NORTH;

    const splitted = problem.split(',')
    splitted.forEach(function (value) {
      value = value.trim();
      direction = rotate(value.charAt(0), direction);
      var travelResult = travel(direction, value.substr(1), x, y);
      x = travelResult[0];
      y = travelResult[1];
    });
    return Math.abs(x + y);
}

module.exports = { process, travel, rotate }