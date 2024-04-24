class Solution {
public:
    int tribonacci(int n) {
        vector<int> mem = {0,1,1};
        if(n<2) return mem[n];
        for(int i=3; i<=n; i++){
            int next = mem[0]+mem[1]+mem[2];
            mem[0] = mem[1];
            mem[1] = mem[2];
            mem[2] = next;
        }
        return mem[2];
    }
};