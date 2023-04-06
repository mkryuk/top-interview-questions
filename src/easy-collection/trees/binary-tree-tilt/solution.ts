import { TreeNode } from "../common";

export function findTilt(root: TreeNode | null): number {
  const { tilt } = dfs(root);
  return tilt;
}

function dfs(root: TreeNode | null): { sum: number; tilt: number } {
  if (root === null) {
    return { sum: 0, tilt: 0 };
  }
  const left = dfs(root.left);
  const right = dfs(root.right);
  return {
    sum: left.sum + right.sum + root.val,
    tilt: left.tilt + right.tilt + Math.abs(left.sum - right.sum),
  };
}
