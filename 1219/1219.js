/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  const dfs = (x, y) => {
    const cur = grid[x][y];
    if (cur === 0) return 0;

    grid[x][y] = 0;
    let left = 0,
      right = 0,
      up = 0,
      down = 0;
    if (x - 1 >= 0 && grid[x - 1][y] > 0) {
      up = dfs(x - 1, y);
    }
    if (x + 1 < m && grid[x + 1][y] > 0) {
      down = dfs(x + 1, y);
    }
    if (y - 1 >= 0 && grid[x][y - 1] > 0) {
      left = dfs(x, y - 1);
    }
    if (y + 1 < n && grid[x][y + 1] > 0) {
      right = dfs(x, y + 1);
    }
    grid[x][y] = cur;
    return cur + Math.max(left, right, up, down);
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        max = Math.max(max, dfs(i, j));
      }
    }
  }
  return max;
};
