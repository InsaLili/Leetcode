/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  let result = 0;
  const n = s.length;
  //dp length should be z ascii number + k max value
  const dp = new Array(123 + 25).fill(0);
  for (let i = 0; i < n; i++) {
    const ch = s.charCodeAt(i);
    for (let j = ch - k; j <= ch + k; j++) {
      dp[ch] = Math.max(dp[ch], dp[j]);
    }
    dp[ch]++;
    result = Math.max(result, dp[ch]);
  }
  return result;
};
