/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let dif = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    dif.push(Math.abs(s.charCodeAt(i) - t.charCodeAt(i)));
  }
  let left = 0;
  let right = 0;
  let accu = dif[left];
  while (left < s.length && right < s.length) {
    if (accu <= maxCost) {
      right++;
      accu += dif[right];
      result = Math.max(result, right - left);
    } else {
      accu -= dif[left];
      left++;
    }
    if (left > right) {
      right++;
      accu += dif[right];
    }
  }
  return result;
};
