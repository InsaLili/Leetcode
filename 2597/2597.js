/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let result = 0;
  const dfs = arr => {
    const n = arr.length;
    if (arr.length === 0) {
      return 0;
    }
    let res = 0;
    for (let i = 0; i < n; i++) {
      let list = [];
      for (let j = i + 1; j < n; j++) {
        if (Math.abs(arr[i] - arr[j]) !== k) {
          list.push(arr[j]);
        }
      }
      res += 1 + dfs(list);
    }
    return res;
  };
  return dfs(nums);
};
