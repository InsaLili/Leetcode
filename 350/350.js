/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let hash = {},
    result = [];
  for (const num of nums1) {
    hash[num] = (hash[num] || 0) + 1;
  }
  for (const num of nums2) {
    if (hash[num]) {
      result.push(num);
      hash[num]--;
    }
  }
  return result;
};
