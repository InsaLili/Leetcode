/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let rowMin = [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    let index = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        index = j;
      }
    }
    rowMin.push([min, index]);
  }

  for (const min of rowMin) {
    const value = min[0];
    const index = min[1];
    let add = true;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][index] > value) {
        add = false;
        break;
      }
    }
    if (add) result.push(value);
  }

  return result;
};
