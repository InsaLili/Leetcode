/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const N = s.length;
  let count_a = new Array(N).fill(0);
  let count_b = new Array(N).fill(0);

  let b_count = 0;
  for (let i = 0; i < N; i++) {
    count_b[i] = b_count;
    if (s[i] == 'b') b_count++;
  }

  let a_count = 0;
  for (let i = N - 1; i >= 0; i--) {
    count_a[i] = a_count;
    if (s[i] == 'a') a_count++;
  }

  let result = N;
  for (let i = 0; i < N; i++) {
    result = Math.min(result, count_a[i] + count_b[i]);
  }

  return result;
};
