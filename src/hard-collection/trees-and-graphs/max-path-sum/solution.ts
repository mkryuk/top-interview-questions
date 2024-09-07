import { TreeNode } from "../common";

export function maxPathSum(root: TreeNode | null): number {
  let [_, result] = getMaxPath(root);
  return result;
}

function getMaxPath(root: TreeNode | null): [branchSum: number, maxSum: number] {
  if (!root) {
    return [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  }
  let [left, leftSum] = getMaxPath(root.left);
  let [right, rightSum] = getMaxPath(root.right);
  let maxSum = Math.max(root.val, root.val + left, root.val + right, root.val + left + right, leftSum, rightSum);
  let maxBranch = Math.max(root.val, root.val + left, root.val + right);
  return [maxBranch, maxSum];
}
