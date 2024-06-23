/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  if (nums.length === 1) return 1;

  let result = 0,
    left = 0,
    dec = [],
    inc = [];

  for (let right = 0; right < nums.length; right++) {
    let num = nums[right];
    while (dec.length > 0 && num > dec[dec.length - 1]) {
      dec.pop();
    }
    dec.push(num);
    while (inc.length > 0 && num < inc[inc.length - 1]) {
      inc.pop();
    }
    inc.push(num);
    while (dec[0] - inc[0] > limit) {
      if (dec[0] == nums[left]) {
        dec.shift();
      }
      if (inc[0] == nums[left]) {
        inc.shift();
      }
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};
