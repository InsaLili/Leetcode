/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const converter = num => {
    let digits = num.toString().split('');
    for (let i = 0; i < digits.length; i++) {
      digits[i] = mapping[digits[i]];
    }
    return Number(digits.join(''));
  };
  const hash = {};
  for (let num of nums) {
    if (!(num in hash)) {
      hash[num] = converter(num);
    }
  }
  nums.sort((a, b) => hash[a] - hash[b]);
  return nums;
};
