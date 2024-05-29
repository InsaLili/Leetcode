/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let result = 0;
  const addOne = num => {
    for (let i = num.length - 2; i >= 0; i--) {
      if (num.charAt(i) === '1') {
        num = num.substring(0, i) + '0' + num.substring(i + 1);
        if (i === 0) {
          num = '1' + num;
        }
      } else {
        num = num.substring(0, i) + '1' + num.substring(i + 1);
        return num;
      }
    }
    return num;
  };
  while (s.length > 1) {
    if (s.charAt(s.length - 1) === '0') {
      s = s.substring(0, s.length - 1);
    } else {
      s = s.slice(0, -1) + '0';
      s = addOne(s);
    }
    result++;
  }

  return result;
};
