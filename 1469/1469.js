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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  const result = [];

  const preorder = node => {
    if (!node) return;
    if (node.left && !node.right) {
      result.push(node.left.val);
    } else if (node.right && !node.left) {
      result.push(node.right.val);
    }
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return result;
};
