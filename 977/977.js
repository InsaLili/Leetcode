/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const N = nums.length;
  const result = new Array(N);
  let left = 0,
    right = N - 1;

  for (let i = N - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      square = nums[left];
      left++;
    } else {
      square = nums[right];
      right--;
    }
    result[i] = square * square;
  }

  return result;
};
