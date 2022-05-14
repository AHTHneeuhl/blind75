/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function isSameTree(p, q) {
  if (p === null && q === null) return true;

  if (p !== null && q !== null && p.val === q.val)
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  else return false;
}
