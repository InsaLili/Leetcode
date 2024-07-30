/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const N = s.length;
  let b_count = 0;
  let min_deletions = 0;
  for (let i = 0; i < N; i++) {
    if (s[i] == 'b') {
      b_count++;
    } else {
      min_deletions = Math.min(min_deletions + 1, b_count);
    }
  }

  return min_deletions;
};
