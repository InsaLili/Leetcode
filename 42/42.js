/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  const N = height.length;
  let left_max = new Array(N).fill(0);
  let right_max = new Array(N).fill(0);
  left_max[0] = height[0];
  right_max[N - 1] = height[N - 1];
  for (let i = 1; i < N - 1; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1]);
  }
  for (let i = N - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1]);
  }

  for (let i = 1; i < N - 1; i++) {
    result += Math.min(left_max[i], right_max[i]) - height[i];
  }

  return result;
};
