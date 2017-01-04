
export function lc(s) {
  return s.toLowerCase();
}

export function titleCase(s) {
  return s.charAt(0).toLocaleUpperCase() + s.substr(1).toLocaleLowerCase()
}
