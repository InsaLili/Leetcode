/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
  let result = 0;
  const freq = new Array(1024).fill(0);
  freq[0] = 1;
  let bitmask = 0;
  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - 'a'.charCodeAt();
    bitmask ^= 1 << index;
    result += freq[bitmask];
    for (let j = 0; j < 10; j++) {
      const newBitmask = bitmask ^ (1 << j);
      result += freq[newBitmask];
    }
    freq[bitmask]++;
  }
  return result;
};
