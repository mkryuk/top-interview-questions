import { TreeNode } from "../common";

export function isValidBST(root: TreeNode | null): boolean {
  return isValidNode(root);
}

function isValidNode(root: TreeNode | null, min?: number, max?: number): boolean {
  if (!root) {
    return true;
  }
  if ((min !== undefined && root.val <= min) || (max !== undefined && root.val >= max)) {
    return false;
  }
  return isValidNode(root.right, root.val, max) && isValidNode(root.left, min, root.val);
}
