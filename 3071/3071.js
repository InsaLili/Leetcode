/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperationsToWriteY = function (grid) {
  const midRow = Math.floor(grid.length / 2);
  const midCol = Math.floor(grid[0].length / 2);
  const total = grid.length * grid[0].length;

  const isYCoordinate = (r, c) => {
    if (r > midRow) {
      return c === midCol;
    } else {
      if (c <= midCol) {
        return r === c;
      } else {
        return r === grid[0].length - 1 - c;
      }
    }
  };

  const mapY = new Map();
  const mapRest = new Map();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      const cell = grid[r][c];
      if (isYCoordinate(r, c)) {
        mapY.set(cell, (mapY.get(cell) || 0) + 1);
      } else {
        mapRest.set(cell, (mapRest.get(cell) || 0) + 1);
      }
    }
  }

  const types = [0, 1, 2];
  let result = total;

  for (let type of types) {
    let newCount = 0;
    for (let [key, value] of mapY) {
      if (key !== type) {
        newCount += value;
      }
    }
    let rest = [];
    for (let [key, value] of mapRest) {
      if (key === type) {
        newCount += value;
      } else {
        rest.push(value);
      }
    }
    if (rest.length === 2) {
      newCount += Math.min(...rest);
    }

    result = Math.min(newCount, result);
  }

  return result;
};
