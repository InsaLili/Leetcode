/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function (m, n, positions) {
  const grid = new Array(m).fill().map(() => Array(n).fill(0));
  const result = new Array(positions.length);
  for (let i = 0; i < positions.length; i++) {
    const [x, y] = positions[i];
    grid[x][y] = 1;
    if (i === 0) {
      result[i] = 1;
    } else {
      result[i] = count();
    }
  }
  function count() {
    let total = 0;
    const currentGrid = grid.map(item => item.slice());
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (currentGrid[i][j] === 1) {
          total++;
          cleanUp(i, j);
        }
      }
    }
    function cleanUp(i, j) {
      currentGrid[i][j] = 0;
      if (i + 1 < m && currentGrid[i + 1][j] === 1) cleanUp(i + 1, j);
      if (j + 1 < n && currentGrid[i][j + 1] === 1) cleanUp(i, j + 1);
      if (i - 1 >= 0 && currentGrid[i - 1][j] === 1) cleanUp(i - 1, j);
      if (j - 1 >= 0 && currentGrid[i][j - 1] === 1) cleanUp(i, j - 1);
    }
    return total;
  }

  return result;
};
