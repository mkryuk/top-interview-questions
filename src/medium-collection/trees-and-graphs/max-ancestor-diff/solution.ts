import { TreeNode } from "../common";

export function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return dfs(root, root.val, root.val);
}

function dfs(root: TreeNode | null, min: number, max: number): number {
  if (!root) {
    return 0;
  }
  min = Math.min(min, max, root.val);
  max = Math.max(min, max, root.val);
  const diff = max - min;
  const left = dfs(root.left, min, max);
  const right = dfs(root.right, min, max);
  return Math.max(diff, left, right);
}
