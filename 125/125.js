/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let trimmed = [];
  for (let i of s) {
    if (i.match(/[a-z0-9]/i)) {
      trimmed.push(i.toLowerCase());
    }
  }
  for (let i = 0; i < Math.ceil(trimmed.length / 2); i++) {
    if (trimmed[i] !== trimmed[trimmed.length - i - 1]) return false;
  }
  return true;
};
