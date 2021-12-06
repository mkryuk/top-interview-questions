import { TreeNode } from "../common";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  let root: TreeNode | null = new TreeNode();
  root = addNode(root, nums, 0, nums.length - 1);
  return root;
}

function addNode(
  root: TreeNode | null,
  nums: number[],
  left: number,
  right: number
): TreeNode | null {
  if (left > right) {
    return null;
  }
  let temp = new TreeNode();
  let index = Math.ceil((right - left) / 2) + left;
  temp.val = nums[index];
  root = temp;
  root.left = addNode(root.left, nums, left, index - 1);
  root.right = addNode(root.right, nums, index + 1, right);
  return root;
}
