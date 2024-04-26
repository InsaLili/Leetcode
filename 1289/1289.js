/**
 * @param {number[][]} grid
 * @return {number}
 */

// We only care about the two minimum values in a row
const getTwoMin = array => {
  let firstMin = Infinity,
    secondMin = Infinity,
    minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < firstMin) {
      secondMin = firstMin;
      firstMin = array[i];
      minIndex = i;
    } else if (array[i] < secondMin) {
      secondMin = array[i];
    }
  }
  return [firstMin, secondMin, minIndex];
};
var minFallingPathSum = function (grid) {
  const size = grid.length;
  let sum = grid[0];
  for (let row = 1; row < size; row++) {
    const [firstMin, secondMin, minIndex] = getTwoMin(sum);
    for (let column = 0; column < size; column++) {
      if (column !== minIndex) {
        sum[column] = grid[row][column] + firstMin;
      } else {
        sum[column] = grid[row][column] + secondMin;
      }
    }
  }

  return Math.min(...sum);
};
