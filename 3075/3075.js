/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let result = 0;
  for (let i = 0; i < k; i++) {
    if (happiness[i] - i <= 0) {
      return result;
    }
    result += happiness[i] - i;
  }
  return result;
};
