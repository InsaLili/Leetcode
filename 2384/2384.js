/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
  const list = new Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    list[num.charAt(i)]++;
  }

  let odd = -1;
  let even = '';
  for (let i = 9; i >= 0; i--) {
    if (list[i] > 0) {
      if (list[i] % 2 === 1) {
        odd = Math.max(odd, i);
      }
      if (i === 0 && even.length === 0) break;
      even = even.concat(i.toString().repeat(list[i] / 2));
    }
  }

  let reverseEven = '';
  for (let i = even.length - 1; i >= 0; i--) {
    reverseEven = reverseEven.concat(even.charAt(i));
  }
  const middle = odd >= 0 ? odd : '';

  return (even + middle + reverseEven).length > 0
    ? even + middle + reverseEven
    : '0';
};
