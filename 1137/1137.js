/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const mem = [0, 1, 1];
  if (n < 3) return mem[n];
  for (let i = 3; i <= n; i++) {
    mem.push(mem[i - 1] + mem[i - 2] + mem[i - 3]);
  }
  return mem[n];
};
