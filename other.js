




function Map() {
  this.x = 30;
  this.y = 30;
  this.visible = function () {
    return true;
  };

  this.moveUp = function() {
    this.y -= 1;
  };

  this.distance = function(x1, y1, x2, y2) {

  };
}

exports.Map = Map;














//the other file
var Map = require('').Map;

var instance = new Map();

map.moveUp(); kata.moveUp(map);
map.visible(30, 30);
