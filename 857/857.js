/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
  const workers = new Array();
  for (let i = 0; i < quality.length; i++) {
    workers.push([wage[i] / quality[i], quality[i]]);
  }
  workers.sort((a, b) => a[0] - b[0]);
  let res = Infinity,
    qsum = 0;
  let qualityqueue = [];
  for (const worker of workers) {
    qsum += worker[1];
    let i = 0;
    while (worker[1] < qualityqueue[i]) {
      i++;
    }
    qualityqueue.splice(i, 0, worker[1]);
    if (qualityqueue.length > k) {
      qsum -= qualityqueue[0];
      qualityqueue.shift();
    }
    if (qualityqueue.length === k) {
      res = Math.min(res, qsum * worker[0]);
    }
  }

  return res;
};
