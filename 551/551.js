/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absent = 0;
  let late = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = s.charAt(i);
    if (cur === 'L') {
      late++;
    } else {
      late = 0;
      if (cur === 'A') {
        absent++;
      }
    }

    if (absent >= 2 || late >= 3) {
      return false;
    }
  }

  return true;
};
