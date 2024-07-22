/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightMap = heights.map((height, index) => [index, height]);
  heightMap.sort((a, b) => b[1] - a[1]);
  return heightMap.map(i => names[i[0]]);
};
