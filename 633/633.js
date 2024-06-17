/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0;
  let right = Math.ceil(Math.sqrt(c));
  while (left <= right) {
    const total = left * left + right * right;
    if (total < c) {
      left++;
    } else if (total > c) {
      right--;
    } else {
      return true;
    }
  }
  return false;
};
