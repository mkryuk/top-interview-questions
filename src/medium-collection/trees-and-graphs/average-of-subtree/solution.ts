import { TreeNode } from "../common";

export function averageOfSubtree(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const { result } = dfs(root);
  return result;
}

function dfs(node: TreeNode | null): {
  sum: number;
  count: number;
  result: number;
} {
  if (node === null) {
    return { sum: 0, count: 0, result: 0 };
  }

  const l = dfs(node.left);
  const r = dfs(node.right);
  const sum = node.val + l.sum + r.sum;
  const count = 1 + l.count + r.count;
  const avg = Math.trunc(sum / count);
  const result = avg === node.val ? 1 + l.result + r.result : l.result + r.result;
  return { sum, count, result };
}
