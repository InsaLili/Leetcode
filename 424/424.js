/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const letters = new Set();
  for (let c of s) {
    letters.add(c);
  }
  let maxLength = 0;
  for (let letter of letters) {
    let start = 0,
      end = 0,
      count = 0;
    while (end < s.length) {
      if (s[end] === letter) {
        count++;
      }
      while (count + k < end - start + 1) {
        if (s[start] === letter) count--;
        start++;
      }
      maxLength = Math.max(maxLength, end - start + 1);
      end++;
    }
  }

  return maxLength;
};
