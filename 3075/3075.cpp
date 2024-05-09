class Solution {
public:
    long long maximumHappinessSum(vector<int>& happiness, int k) {
        sort(happiness.begin(), happiness.end(), greater<int>());
        long long result = 0;
        for(int i=0; i<k; i++){
            if(happiness[i]-i <= 0){
                return result;
            }
            result += happiness[i]-i;
        }
        return result;
    }
};