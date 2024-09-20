var maxSubArray = function (nums) {
  let max_subarray = Number.NEGATIVE_INFINITY;
  let current_subarray = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    current_subarray = Math.max(num, current_subarray + num);
    max_subarray = Math.max(max_subarray, current_subarray);
  }

  return max_subarray;
};
