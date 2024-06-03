/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let pos = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === t.charAt(pos)) {
      pos++;
    }
  }
  return t.length - pos;
};
