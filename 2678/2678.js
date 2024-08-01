/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let result = 0;
  for (let passanger of details) {
    const age = Number(passanger.charAt(11) + passanger.charAt(12));
    if (age > 60) result++;
  }

  return result;
};
