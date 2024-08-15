/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squares = nums.map((i) => i * i);
  squares.sort((a, b) => a - b);

  return squares;
};
