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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  const inOrder = node => {
    if (!node) return [];
    return [...inOrder(node.left), node.val, ...inOrder(node.right)];
  };
  const sortedArray = inOrder(root);

  const dfs = arr => {
    if (!arr.length) return null;
    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);
    node.left = dfs(arr.slice(0, mid));
    node.right = dfs(arr.slice(mid + 1));
    return node;
  };

  return dfs(sortedArray);
};
