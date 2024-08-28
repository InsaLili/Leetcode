/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 1,
    right = s.length + 1;

  const isValid = mid => {
    const frequency = {};
    let start = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      const c = s.charAt(i);
      frequency[c] = (frequency[c] || 0) + 1;
      if (i >= mid) {
        frequency[s[start]] -= 1;
        start++;
      }
      max = Math.max(max, frequency[c]);
      if (mid - max <= k) {
        return true;
      }
    }
    return false;
  };

  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2);
    if (isValid(mid)) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};
