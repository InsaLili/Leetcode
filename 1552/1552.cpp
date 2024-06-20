class Solution {
public:
    bool doesFit(int mid, vector<int>& position, int m){
        int ball=1;
        int pos = position[0];

        for(int i=0; i<position.size(); i++){
            if(position[i]-pos >= mid){
                ball++;
                pos = position[i];

                if(ball==m) return true;
            }
        }
        return false;
    }

    int maxDistance(vector<int>& position, int m) {
        int result = 0;
        int N = position.size();
        sort(position.begin(), position.end());

        int left=1;
        int right=ceil(position[N-1]/(m-1));
        while(left<=right){
            int mid = floor((right+left)/2);
            if(doesFit(mid, position, m)){
                result = mid;
                left = mid+1;
            }else{
                right = mid-1;
            }
        }
        return result;
    }
};