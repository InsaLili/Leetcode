/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {
  let hash = new Array(n).fill(0);
  let result = 0;
  for (const road of roads) {
    hash[road[0]]++;
    hash[road[1]]++;
  }
  hash.sort((a, b) => a - b);
  for (let i = 0; i < hash.length; i++) {
    result += hash[i] * (i + 1);
  }
  return result;
};
