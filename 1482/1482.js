/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  const N = bloomDay.length;
  if (m * k > N) return -1;

  const getNumberOfBouquets = mid => {
    let num = 0;
    let count = 0;
    for (const day of bloomDay) {
      if (day <= mid) {
        count++;
      } else {
        count = 0;
      }
      if (count === k) {
        num++;
        count = 0;
      }
    }
    return num;
  };

  let start = 0,
    end = Math.max(...bloomDay),
    result;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const maxBouquets = getNumberOfBouquets(mid);
    if (maxBouquets < m) {
      start = mid + 1;
    } else {
      end = mid - 1;
      result = mid;
    }
  }
  return result;
};
