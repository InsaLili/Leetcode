/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let max = 4,
    result = Infinity;
  for (let i = 0; i < max; i++) {
    const dif = nums[nums.length - max + i] - nums[i];
    result = Math.min(result, dif);
  }
  return result;
};
