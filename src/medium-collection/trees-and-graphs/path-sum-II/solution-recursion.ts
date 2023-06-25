import { TreeNode } from "../common";

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  let result: number[][] = [];
  dfs(root, targetSum, 0, [], result);
  return result;
}

function dfs(
  root: TreeNode | null,
  targetSum: number,
  branchSum: number,
  branchNodes: number[],
  result: number[][],
) {
  if (root === null) {
    return;
  }
  branchNodes.push(root.val);
  branchSum += root.val;
  if (root.left !== null) {
    dfs(root.left, targetSum, branchSum, branchNodes, result);
  }
  if (root.right !== null) {
    dfs(root.right, targetSum, branchSum, branchNodes, result);
  }
  if (!root.left && !root.right && branchSum === targetSum) {
    result.push([...branchNodes]);
  }
  branchNodes.pop();
}
