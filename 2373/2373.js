/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let result = [];
  for (let i = 0; i < grid.length - 2; i++) {
    let row = [];
    for (let j = 0; j < grid.length - 2; j++) {
      const max = Math.max(
        grid[i][j],
        grid[i + 1][j],
        grid[i + 2][j],
        grid[i][j + 1],
        grid[i + 1][j + 1],
        grid[i + 2][j + 1],
        grid[i][j + 2],
        grid[i + 1][j + 2],
        grid[i + 2][j + 2]
      );
      row.push(max);
    }
    result.push(row);
  }
  return result;
};
