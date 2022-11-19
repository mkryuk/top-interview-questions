import { TreeNode } from "../common";

// this runs in O(n) time complexity
export function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let result = 1;
  result += countNodes(root.right);
  result += countNodes(root.left);
  return result;
}
