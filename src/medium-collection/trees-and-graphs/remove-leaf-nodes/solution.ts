import { TreeNode } from "../common";

export function removeLeafNodes(
  root: TreeNode | null,
  target: number,
): TreeNode | null {
  if (root === null) {
    return root;
  }
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  if (root.left === null && root.right === null && root.val === target) {
    return null;
  }
  return root;
}
