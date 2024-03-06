import { TreeNode } from "../common";

export function findBottomLeftValue(root: TreeNode | null): number {
  let depth = -1;
  let result = root!.val;
  function dfs(node: TreeNode, level: number) {
    if (level > depth) {
      depth = level;
      result = node.val;
    }
    if (node.left !== null) {
      dfs(node.left, level + 1);
    }
    if (node.right !== null) {
      dfs(node.right, level + 1);
    }
  }
  dfs(root!, 0);
  return result;
}
