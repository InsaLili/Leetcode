/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {
  const n = words.length;
  let res = 0;
  let letters_count = new Array(26).fill(0);
  for (const letter of letters) {
    letters_count[letter.charCodeAt(0) - 97]++;
  }
  let words_score = {};
  for (const word of words) {
    let s = 0;
    for (const ch of word) {
      s += score[ch.charCodeAt(0) - 97];
    }
    words_score[word] = s;
  }
  const backTracking = (cur_ind, cur_score) => {
    if (cur_ind === n) {
      res = Math.max(res, cur_score);
      return;
    }
    let can_add = true;
    let word = words[cur_ind];
    let word_count = new Array(26).fill(0);

    for (const ch of word) {
      word_count[ch.charCodeAt(0) - 97]++;
      if (
        word_count[ch.charCodeAt(0) - 97] > letters_count[ch.charCodeAt(0) - 97]
      ) {
        can_add = false;
        break;
      }
    }
    if (can_add) {
      for (let i = 0; i < 26; i++) {
        letters_count[i] -= word_count[i];
      }
      backTracking(cur_ind + 1, cur_score + words_score[word]);
      for (let i = 0; i < 26; i++) {
        letters_count[i] += word_count[i];
      }
    }
    backTracking(cur_ind + 1, cur_score);
  };
  backTracking(0, 0);
  return res;
};
