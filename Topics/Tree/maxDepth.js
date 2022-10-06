/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function maxDepth(root) {
  if (root === null) return 0;

  const lh = maxDepth(root.left);
  const rh = maxDepth(root.right);

  return 1 + Math.max(lh, rh);
}
