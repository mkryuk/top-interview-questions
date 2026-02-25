import { TreeNode } from "../common";

export function sumRootToLeaf(root: TreeNode | null): number {
  return dfs(root, 0);
}

function dfs(node: TreeNode | null, current: number): number {
  if (node === null) {
    return 0;
  }

  const sum = (current << 1) | node.val;
  if (node.left === null && node.right === null) {
    return sum;
  }
  return dfs(node.left, sum) + dfs(node.right, sum);
}
