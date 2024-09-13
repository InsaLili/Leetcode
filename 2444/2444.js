/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  let minPos = -1,
    maxPos = -1,
    left = -1,
    result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) minPos = i;
    if (nums[i] === maxK) maxPos = i;
    if (nums[i] < minK || nums[i] > maxK) left = i;

    const valid = Math.max(0, Math.min(minPos, maxPos) - left);
    result += valid;
  }
  return result;
};
