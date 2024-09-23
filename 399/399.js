/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  //O(N + N*M)
  const valueMap = {};

  for (let i = 0; i < equations.length; i++) {
    //O(N)
    const left = equations[i][0];
    const right = equations[i][1];
    valueMap[left] = valueMap[left] || {};
    valueMap[left][right] = values[i];

    valueMap[right] = valueMap[right] || {};
    valueMap[right][left] = 1 / values[i];
  }

  let result = [];

  for (let [left, right] of queries) {
    //O(M)
    let added = false;
    if (!valueMap[left] || !valueMap[right]) {
      result.push(-1);
      continue;
    }
    if (left === right) {
      result.push(1);
      continue;
    }

    let queue = [[left, 1]];
    let visited = new Set();
    visited.add(left);

    while (queue.length > 0) {
      //O(N)
      const current = queue.shift();
      if (current[0] === right) {
        result.push(current[1]);
        added = true;
        break;
      }

      for (let [key, value] of Object.entries(valueMap[current[0]])) {
        if (!visited.has(key)) {
          queue.push([key, value * current[1]]);
          visited.add(key);
        }
      }
    }
    if (!added) result.push(-1);
  }

  return result;
};
