/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0,
    sum = 0;
  let hash = new Map();
  hash.set(0, 1);
  for (const num of nums) {
    sum += num;
    if (hash.has(sum - k)) {
      result += hash.get(sum - k);
    }
    hash.set(sum, hash.get(sum) + 1 || 1);
  }
  return result;
};
