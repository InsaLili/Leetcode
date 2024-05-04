/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let l = 0,
    r = people.length - 1,
    result = 0;
  people.sort((a, b) => a - b);
  while (l < r) {
    if (people[l] + people[r] <= limit) l++;
    r--;
    result++;
  }
  if (l === r) result++;
  return result;
};
