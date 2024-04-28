/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
  const map = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const [x, y] = edges[i];
    map[x].push(y);
    map[y].push(x);
  }

  const count = new Array(n).fill(0);
  const ans = new Array(n).fill(0);

  const dfs1 = (cur, parent) => {
    count[cur] = 1;
    for (const item of map[cur]) {
      if (item !== parent) {
        dfs1(item, cur);
        count[cur] += count[item];
        ans[cur] += ans[item] + count[item];
      }
    }
  };
  const dfs2 = (cur, parent) => {
    for (const item of map[cur]) {
      if (item !== parent) {
        ans[item] = ans[cur] + n - 2 * count[item];
        dfs2(item, cur);
      }
    }
  };
  dfs1(0, -1);
  dfs2(0, -1);
  return ans;
};
