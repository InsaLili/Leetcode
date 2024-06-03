class Solution {
    public int appendCharacters(String s, String t) {
        int sPos = 0, tPos = 0;
        while(sPos<s.length() && tPos<t.length()){
            if(s.charAt(sPos) == t.charAt(tPos)){
                tPos++;
            }
            sPos++;
        }

        return t.length() - tPos;
    }
}