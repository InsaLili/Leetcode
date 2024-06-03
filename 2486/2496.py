class Solution(object):
    def appendCharacters(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        sPos, tPos = 0, 0
        while sPos < len(s) and tPos < len(t):
            if s[sPos] == t[tPos]:
                tPos += 1
            sPos += 1

        return len(t) - tPos
        