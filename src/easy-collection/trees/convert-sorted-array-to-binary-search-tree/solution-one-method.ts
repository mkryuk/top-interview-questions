import { TreeNode } from "../common";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  let index = Math.floor(nums.length / 2);
  let root: TreeNode | null = new TreeNode(nums[index]);
  root.left = sortedArrayToBST(nums.slice(0, index));
  root.right = sortedArrayToBST(nums.slice(index + 1));
  return root;
}
