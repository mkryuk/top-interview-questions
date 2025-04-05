import { TreeNode } from "../common";

export function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  return dfs(root)[1];
}

function dfs(node: TreeNode | null): [number, TreeNode | null] {
  if (node === null) {
    return [0, null];
  }
  const [leftDepth, leftLca] = dfs(node.left);
  const [rightDepth, rightLca] = dfs(node.right);
  if (leftDepth === rightDepth) {
    return [leftDepth + 1, node];
  } else if (leftDepth > rightDepth) {
    return [leftDepth + 1, leftLca];
  }
  return [rightDepth + 1, rightLca];
}
