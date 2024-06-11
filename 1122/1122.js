/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();
  const N = arr2.length;
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }
  arr1.sort((a, b) => {
    a = map.has(a) ? map.get(a) : N + a;
    b = map.has(b) ? map.get(b) : N + b;
    return a - b;
  });

  return arr1;
};
