import { TreeNode } from "../common";

export function isBalanced(root: TreeNode | null): boolean {
  return checkDepth(root) !== -1;
}

function checkDepth(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }
  const leftDepth = checkDepth(node.left);
  if (leftDepth === -1) {
    return -1;
  }
  const rightDepth = checkDepth(node.right);
  if (rightDepth === -1) {
    return -1;
  }
  const diff = Math.abs(leftDepth - rightDepth);
  if (diff > 1) {
    return -1;
  }
  return Math.max(leftDepth, rightDepth) + 1;
}
