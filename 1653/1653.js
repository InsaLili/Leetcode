/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const N = s.length;
  let a_count = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (s[i] == 'a') a_count++;
  }

  let b_count = 0;
  let result = N;
  for (let i = 0; i < N; i++) {
    if (s[i] == 'a') a_count--;
    result = Math.min(result, a_count + b_count);
    if (s[i] == 'b') b_count++;
  }

  return result;
};
