/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let start = 0,
    end = 0,
    maxFreq = 0;
  const freqMap = {};
  while (end < s.length) {
    freqMap[s[end]] = (freqMap[s[end]] || 0) + 1;
    maxFreq = Math.max(maxFreq, freqMap[s[end]]);

    if (end + 1 - start > maxFreq + k) {
      freqMap[s[start]]--;
      start++;
    }
    end++;
  }

  return end - start;
};
