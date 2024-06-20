/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  let result = 0;
  const N = warehouse.length;
  let currentMin = Infinity;
  let minHeight = [];
  for (let i = 0; i < N; i++) {
    currentMin = Math.min(currentMin, warehouse[i]);
    minHeight.push(currentMin);
  }
  currentMin = Infinity;
  for (let i = N - 1; i >= 0; i--) {
    currentMin = Math.min(currentMin, warehouse[i]);
    minHeight[i] = Math.max(minHeight[i], currentMin);
  }
  minHeight.sort((a, b) => a - b);
  boxes.sort((a, b) => a - b);

  let boxIndex = 0;
  for (const house of minHeight) {
    if (boxes[boxIndex] <= house) {
      result++;
      boxIndex++;
    }
  }
  return result;
};
