var kata = require('../kata');
var visible = kata.visible;
var moveUp = kata.moveUp;

describe('visiblity of squares within vision radius', function() {
  it('is visible at the starting location', function() {
    var map = { };
    kata.init(map);
    expect(map.x).toBe(30);
    expect(map.y).toBe(30);
    expect(kata.visible(map, 30, 30)).toBe(true);
  });

  it('is not visible outside of the site radius', function() {
    var map = { };
    kata.init(map);
    expect(kata.visible(map, 30, 27)).toBe(false); //North
    expect(kata.visible(map, 30, 33)).toBe(false); //South
    expect(kata.visible(map, 33, 30)).toBe(false); //East
    expect(kata.visible(map, 27, 30)).toBe(false); //West
  });

  it('new squares are revealed', function() {
    var map = { };
    kata.init(map);
    expect(kata.visible(map, 30, 27)).toBe(false);
    kata.moveUp(map);
    expect(kata.visible(map, 30, 27)).toBe(true);
  });

  it('after moving, old squares stay revealed', function() {
    var map = { };
    kata.init(map);
    expect(visible(map, 30, 32)).toBe(true);
    moveUp(map);
    expect(visible(map, 30, 32)).toBe(true);
  });
});
