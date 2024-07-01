/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (const i of arr) {
    if (i % 2 === 0) {
      count = 0;
    } else {
      count++;
      if (count === 3) return true;
    }
  }
  return false;
};
