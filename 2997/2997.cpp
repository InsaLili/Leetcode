class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int sum=k;
        int result = 0;
        for(int num: nums){
            sum ^= num;
        }
        while(sum>0){
            if(sum&1) result++;
            sum = sum >>1;
        }
        return result;
    }
};