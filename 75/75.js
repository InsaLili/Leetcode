/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let map = new Array(3).fill(0).map(i => []);
  for (const num of nums) {
    map[num].push(num);
  }
  map = map.flat();
  for (let i = 0; i < nums.length; i++) {
    nums[i] = map[i];
  }
};
