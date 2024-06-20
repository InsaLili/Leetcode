/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  const N = position.length;
  let result = 0;
  position.sort((a, b) => a - b);

  const doesFit = mid => {
    let ball = 1;
    let pos = position[0];
    for (let i = 1; i < position.length; i++) {
      if (position[i] - pos >= mid) {
        ball++;
        pos = position[i];

        if (ball === m) return true;
      }
    }
    return false;
  };

  let left = 0,
    right = Math.ceil(position[N - 1] / (m - 1));
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (doesFit(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
