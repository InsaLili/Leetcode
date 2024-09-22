/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  let sum = 0;
  let maxElement = 0;
  for (const num of nums) {
    sum += num;
    maxElement = Math.max(num, maxElement);
  }

  let left = maxElement;
  let right = sum;
  let result;

  const minSplitsRequired = (mid) => {
    let currentSum = 0;
    let splits_required = 0;

    for (const num of nums) {
      if (currentSum + num <= mid) {
        currentSum += num;
      } else {
        currentSum = num;
        splits_required += 1;
      }
    }

    return splits_required + 1;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (minSplitsRequired(mid) <= k) {
      right = mid - 1;
      result = mid;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
