/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let hash = [];
  const N = difficulty.length;
  for (let i = 0; i < N; i++) {
    hash.push([difficulty[i], profit[i]]);
  }
  hash.sort((a, b) => a[0] - b[0]);
  worker.sort((a, b) => a - b);
  let num = 0,
    max = 0,
    result = 0;
  for (let work of worker) {
    while (num < N && hash[num][0] <= work) {
      max = Math.max(max, hash[num][1]);
      num++;
    }
    result += max;
  }

  return result;
};
