import { TreeNode } from "../common";

export function maxPathSum(root: TreeNode | null): number {
  const [_, result] = getMaxPathSum(root);
  return result;
}

function getMaxPathSum(root: TreeNode | null): [branchMaxPathSum: number, maxPathSum: number] {
  if (!root) {
    return [0, Number.MIN_SAFE_INTEGER];
  }
  let [leftBranchSum, leftMaxPathSum] = getMaxPathSum(root.left);
  let [rightBranchSum, rightMaxPathSum] = getMaxPathSum(root.right);
  leftBranchSum = Math.max(leftBranchSum, 0);
  rightBranchSum = Math.max(rightBranchSum, 0);
  const nodePathSum = root.val + leftBranchSum + rightBranchSum;
  const maxPathSum = Math.max(nodePathSum, leftMaxPathSum, rightMaxPathSum);
  const maxBranch = root.val + Math.max(leftBranchSum, rightBranchSum);
  return [maxBranch, maxPathSum];
}
