/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
  const adjList = new Map();
  for (let [a, b] of edges) {
    const a_map = adjList.get(a) || [];
    const b_map = adjList.get(b) || [];
    adjList.set(a, [...a_map, b]);
    adjList.set(b, [...b_map, a]);
  }

  const groups = new Map();

  for (let start = 1; start <= n; start++) {
    const queue = new Array();
    const levels = new Array(501).fill(0);
    queue.push(start);
    let deepth = 0;
    let groupId = n + 1;
    levels[start] = 1;
    while (queue.length > 0) {
      deepth++;
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const curr = queue.shift();
        groupId = Math.min(groupId, curr);
        const adjNodes = adjList.get(curr) || [];
        for (let next of adjNodes) {
          if (levels[next] === deepth) {
            return -1;
          } else if (levels[next] === 0) {
            levels[next] = deepth + 1;
            queue.push(next);
          }
        }
      }
    }
    const maxDeepth = Math.max(deepth, groups.get(groupId) || 0);
    groups.set(groupId, maxDeepth);
  }

  let result = 0;
  for (let [key, value] of groups) {
    result += value;
  }

  return result;
};
