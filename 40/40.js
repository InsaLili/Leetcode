/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let combinations = [];
  candidates.sort((a, b) => a - b);
  const backTracking = (current, sum, path) => {
    if (sum === target) {
      combinations.push([...path]);
      return;
    }
    for (let i = current; i < candidates.length; i++) {
      if (i > current && candidates[i] === candidates[i - 1]) continue;
      const newSum = candidates[i] + sum;
      if (newSum > target) break;

      path.push(candidates[i]);
      backTracking(i + 1, newSum, path);
      path.pop();
    }
  };
  backTracking(0, 0, []);
  return combinations;
};
