/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  hand.sort((a, b) => a - b);

  for (let item of hand) {
    let i = 1;
    while (i < groupSize) {
      const index = hand.indexOf(item + i);
      if (index > -1) {
        hand.splice(index, 1);
        i++;
      } else {
        return false;
      }
    }
  }
  return true;
};
