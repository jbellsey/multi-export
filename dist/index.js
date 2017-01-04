'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = require('./lib/math');

Object.defineProperty(exports, 'add', {
  enumerable: true,
  get: function get() {
    return _math.add;
  }
});
Object.defineProperty(exports, 'mult', {
  enumerable: true,
  get: function get() {
    return _math.mult;
  }
});

var _string = require('./lib/string');

Object.defineProperty(exports, 'lc', {
  enumerable: true,
  get: function get() {
    return _string.lc;
  }
});
Object.defineProperty(exports, 'titleCase', {
  enumerable: true,
  get: function get() {
    return _string.titleCase;
  }
});