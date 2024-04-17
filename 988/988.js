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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let result = '';

  function getSum(node, path) {
    if (!node) return;
    const char = String.fromCharCode(node.val + 97);
    path = char + path;
    if (!node.left && !node.right) {
      if (!result || path < result) {
        result = path;
      }
    }
    getSum(node.left, path);
    getSum(node.right, path);
  }
  getSum(root, '');

  return result;
};
