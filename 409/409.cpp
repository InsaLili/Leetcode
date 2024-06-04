class Solution {
public:
    int longestPalindrome(string s) {
        int result = 0;
        std::unordered_set<char> single;
        for(char c: s){
            if(single.find(c)!= single.end()){
                single.erase(c);
                result += 2;
            }else{
                single.insert(c);
            }
        }
        if(!single.empty()){
            result++;
        }

        return result;
    }
};