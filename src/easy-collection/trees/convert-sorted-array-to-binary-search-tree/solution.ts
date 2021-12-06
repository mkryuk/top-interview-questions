import { TreeNode } from "../common";

export function sortedArrayToBST(nums: number[]): TreeNode | null {
  return addNode(nums, 0, nums.length - 1);
}

function addNode(nums: number[], left: number, right: number): TreeNode | null {
  if (left > right) {
    return null;
  }
  let temp = new TreeNode();
  let index = Math.ceil((right - left) / 2) + left;
  temp.val = nums[index];
  temp.left = addNode(nums, left, index - 1);
  temp.right = addNode(nums, index + 1, right);
  return temp;
}
