/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  words.sort((a, b) => a.localeCompare(b));
  const list = new Map();
  for (let word of words) {
    let current = list.get(word) || 0;
    list.set(word, current + 1);
  }
  const sorted = [...list].sort((a, b) => b[1] - a[1]);
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }
  return result;
};
