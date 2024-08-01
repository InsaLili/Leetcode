/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0;
  for (let passanger of details) {
    const tens = Number(passanger[11]);
    if (tens > 6) {
      result++;
    } else if (tens === 6 && Number(passanger[12] > 0)) {
      result++;
    }
  }

  return result;
};
