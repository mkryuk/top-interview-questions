import { TreeNode } from "../common";

export function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) {
    return [];
  }
  let result: number[][] = [];
  dfs(root, targetSum, 0, [], result);
  return result;
}

function dfs(
  root: TreeNode | null,
  targetSum: number,
  branshSum: number,
  branchNodes: number[],
  result: number[][],
) {
  if (root === null) {
    return;
  }
  branchNodes.push(root.val);
  branshSum += root.val;
  if (root.left !== null) {
    dfs(root.left, targetSum, branshSum, branchNodes, result);
  }
  if (root.right !== null) {
    dfs(root.right, targetSum, branshSum, branchNodes, result);
  }
  if (!root.left && !root.right && branshSum === targetSum) {
    result.push([...branchNodes]);
  }
  branchNodes.pop();
}
