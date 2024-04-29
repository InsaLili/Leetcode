/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let sum = k;
  let result = 0;
  for (const num of nums) {
    sum ^= num;
  }
  const value = sum.toString(2);
  result = value.split('1').length - 1;
  return result;
};
