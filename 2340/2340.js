/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function (nums) {
  let copy = [...nums];
  copy.sort((a, b) => a - b);
  const left = nums.indexOf(copy[0]);
  const right = nums.toReversed().indexOf(copy[copy.length - 1]);

  return left + right >= nums.length ? left + right - 1 : left + right;
};
