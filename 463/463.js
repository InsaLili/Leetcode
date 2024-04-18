/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (j === 0 || !grid[i][j - 1]) result++;
        if (j === grid[i].length - 1 || !grid[i][j + 1]) result++;
        if (!grid[i - 1] || !grid[i - 1][j]) result++;
        if (!grid[i + 1] || !grid[i + 1][j]) result++;
      }
    }
  }
  return result;
};
