/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
  let result = -1;
  let max = 0;

  for (const num of nums) {
    if (Math.abs(num) > max) {
      if (nums.indexOf(-num) > -1) {
        max = Math.abs(num);
        result = max;
      }
    }
  }
  return result;
};
