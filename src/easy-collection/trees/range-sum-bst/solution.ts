import { TreeNode } from "../common";

export function rangeSumBST(
  root: TreeNode | null,
  low: number,
  high: number,
): number {
  let result = 0;
  if (!root) {
    return result;
  }

  if (root.val >= low && root.val <= high) {
    result =
      root.val +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high);
  }
  if (root.val < low) {
    result = rangeSumBST(root.right, low, high);
  }
  if (root.val > high) {
    result = rangeSumBST(root.left, low, high);
  }
  return result;
}
