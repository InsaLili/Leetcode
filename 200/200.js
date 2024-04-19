/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const row = grid.length;
  if (!row) return 0;
  const column = grid[0].length;
  let result = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === '1') {
        result++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    grid[i][j] = '0';
    if (i > 0 && grid[i - 1][j] === '1') dfs(i - 1, j);
    if (i < row - 1 && grid[i + 1][j] === '1') dfs(i + 1, j);
    if (j > 0 && grid[i][j - 1] === '1') dfs(i, j - 1);
    if (j < column - 1 && grid[i][j + 1] === '1') dfs(i, j + 1);
  }

  return result;
};
