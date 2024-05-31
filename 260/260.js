/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let dic = new Map();
  for (const num of nums) {
    if (dic.get(num)) {
      dic.delete(num);
    } else {
      dic.set(num, 1);
    }
  }
  return Array.from(dic.keys());
};
