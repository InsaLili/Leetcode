/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let hash = new Map();
  let sum = 0;
  hash.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    sum = (sum + nums[i]) % k;
    if (hash.has(sum)) {
      if (i - hash.get(sum) > 1) {
        return true;
      }
    } else {
      hash.set(sum, i);
    }
  }

  return false;
};
