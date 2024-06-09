/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let hash = new Map();
  let sum = 0;
  let result = 0;
  hash.set(0,1);
  for(let i=0; i<nums.length; i++){
      sum = (sum+nums[i]%k+k)%k;
      if(hash.has(sum)){
          let count = hash.get(sum);
          result += count;
          hash.set(sum, count+1);
      }else{
          hash.set(sum, 1);
      }
  }
  return result;
};