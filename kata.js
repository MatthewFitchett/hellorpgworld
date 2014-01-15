var _ = require('underscore');

var sightRadius = 2;
var visitedSquares = [ ];

function init(map) {
  map.x = 30;
  map.y = 30;
  visitedSquares = [ ];
}

function distance(fromX, fromY, toX, toY) {
  return Math.abs(fromX - toX) + Math.abs(fromY - toY);
}

function withinSightRadius(fromX, fromY, toX, toY) {
  return distance(fromX, fromY, toX, toY) <= sightRadius;
}

function visible(map, x, y) {
  var inRange = withinSightRadius(map.x, map.y, x, y);

  if(inRange) return true;

  var anyInRange = _.find(visitedSquares, function(square) {
    return withinSightRadius(square.x, square.y, x, y);
  });

  return !!anyInRange;
}

function moveUp(map) {
  visitedSquares.push({ x: map.x, y: map.y });
  map.y -= 1;
}

exports.init = init;
exports.visible = visible;
exports.moveUp = moveUp;
