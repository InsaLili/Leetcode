/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let result = [];

  const backtrack = (cur, list) => {
    if (cur === s.length) {
      result.push(list.join(' '));
    }
    for (let i = cur + 1; i <= s.length; i++) {
      const substring = s.substring(cur, i);
      if (wordDict.includes(substring)) {
        backtrack(i, list.concat(substring));
      }
    }
  };

  backtrack(0, []);
  return result;
};
