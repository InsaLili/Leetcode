/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  const N = height.length;
  for (let i = 1; i < N - 1; i++) {
    let left_max = 0,
      right_max = 0;
    for (let j = i; j >= 0; j--) {
      left_max = Math.max(left_max, height[j]);
    }
    for (let j = i; j < N; j++) {
      right_max = Math.max(right_max, height[j]);
    }
    result += Math.min(left_max, right_max) - height[i];
  }
  return result;
};
