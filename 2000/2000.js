/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index < 0) return word;

  let result = '';
  for (let i = 0; i <= index; i++) {
    result = word.charAt(i) + result;
  }
  for (let j = index + 1; j < word.length; j++) {
    result = result + word.charAt(j);
  }
  return result;
};
