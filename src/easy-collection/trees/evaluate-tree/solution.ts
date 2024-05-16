import { TreeNode } from "../common";

export function evaluateTree(root: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  if (root !== null && root.left === null && root.right === null) {
    return root.val === 1;
  }
  const left = evaluateTree(root.left);
  const right = evaluateTree(root.right);
  const result = root.val === 2 ? left || right : left && right;
  return result;
}
