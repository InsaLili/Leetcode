/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let single = [];
  let result = 0;
  for (let char of s) {
    const index = single.indexOf(char);
    if (index !== -1) {
      single.splice(index, 1);
      result += 2;
    } else {
      single.push(char);
    }
  }
  return single.length >= 1 ? result + 1 : result;
};
