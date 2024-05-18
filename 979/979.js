/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
  let result = 0;
  const dfs = node => {
    if (!node) return 0;
    let leftCoins = dfs(node.left);
    let rightCoins = dfs(node.right);
    result += Math.abs(leftCoins) + Math.abs(rightCoins);
    return node.val - 1 + leftCoins + rightCoins;
  };

  dfs(root);
  return result;
};
