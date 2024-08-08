/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[a-z0-9]/gi;
  const trimmed = s.match(regex);

  if (!trimmed) return true;

  const length = Math.ceil(trimmed.length / 2);
  for (let i = 0; i < length; i++) {
    if (trimmed[i].toLowerCase() !== trimmed[trimmed.length - i - 1].toLowerCase()) return false;
  }
  return true;
};
