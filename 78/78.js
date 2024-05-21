/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [[]];
  for (let num of nums) {
    let newSub = [];
    for (let item of result) {
      let cur = [...item];
      cur.push(num);
      newSub.push(cur);
    }
    result = [...result, ...newSub];
  }
  return result;
};
