/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    string result;
    string smallestFromLeaf(TreeNode* root) {
        dfs(root, "");
        return result;
    }
    void dfs(TreeNode* node, string path){
        if(!node) return;
        path = char(node->val + 'a') + path;
        if(!node->left && !node->right){
            if(result == "" || path < result){
                result = path;
            }
        }

        dfs(node->left, path);
        dfs(node->right, path);
    }
};