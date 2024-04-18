class Solution {
public:
    int islandPerimeter(vector<vector<int>>& grid) {
       int result = 0, row = grid.size(), col = grid[0].size();
       for(int i = 0; i < row; i++) {
        for(int j = 0; j < col; j++){
            if(grid[i][j]==1){
                result += 4;
                if(i>0 && grid[i-1][j]==1) result -=2;
                if(j>0 && grid[i][j-1] ==1) result -=2;
            }
        }
       } 
       return result;
    }
};