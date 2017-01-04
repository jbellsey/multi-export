"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lc = lc;
exports.titleCase = titleCase;
function lc(s) {
  return s.toLowerCase();
}

function titleCase(s) {
  return s.charAt(0).toLocaleUpperCase() + s.substr(1).toLocaleLowerCase();
}