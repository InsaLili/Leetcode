/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function (nums) {
  let prefix = BigInt(0),
    result = BigInt(0);
  for (const num of nums) {
    prefix += BigInt(num);
    result |= BigInt(num) | prefix;
  }
  return Number(result);
};
