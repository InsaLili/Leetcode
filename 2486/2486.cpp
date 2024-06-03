class Solution {
public:
    int appendCharacters(string s, string t) {
        int sPos = 0;
        int tPos = 0;
        while(sPos<s.length() && tPos<t.length()){
            if(s[sPos]==t[tPos]){
                tPos++;
            }
            sPos++;
        }
        return t.length() - tPos;
    }
};