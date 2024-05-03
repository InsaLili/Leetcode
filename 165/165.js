/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const n = Math.max(v1.length, v2.length);
  for (let i = 0; i < n; i++) {
    let n1 = v1[i] === undefined ? 0 : Number(v1[i]);
    let n2 = v2[i] === undefined ? 0 : Number(v2[i]);
    if (n1 > n2) {
      return 1;
    } else if (n2 > n1) {
      return -1;
    }
  }
  return 0;
};
