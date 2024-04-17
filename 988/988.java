/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    String result = "";
    public String smallestFromLeaf(TreeNode root) {
        dfs(root, "");
        return result;
    }
    void dfs(TreeNode node, String path){
        if(node == null) return;
        path = (char)(node.val + 'a') + path;
        if(node.left == null && node.right == null){
            if(result == "" || result.compareTo(path)>0){
                result = path;
            }
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }
}