/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
  const row = land.length;
  const column = land[0].length;
  const result = [];
  let r1 = 0,
    c1 = 0,
    r2 = 0,
    c2 = 0;
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (land[r][c] === 1) {
        r1 = r2 = r;
        c1 = c2 = c;
        cleanLand(r, c);
        result.push([r1, c1, r2, c2]);
      }
    }
  }

  function cleanLand(r, c) {
    land[r][c] = 0;
    if (r < row - 1 && land[r + 1][c] === 1) {
      r2 = r + 1;
      cleanLand(r + 1, c);
    }
    if (c < column - 1 && land[r][c + 1] === 1) {
      c2 = c + 1;
      cleanLand(r, c + 1);
    }
  }

  return result;
};
