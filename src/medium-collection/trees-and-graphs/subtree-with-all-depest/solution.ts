import { TreeNode } from "../common";

export function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  return dfs(root)[1];
}

function dfs(node: TreeNode | null): [number, TreeNode | null] {
  if (node === null) {
    return [0, null];
  }
  const [leftDeep, leftNode] = dfs(node.left);
  const [rightDeep, rightNode] = dfs(node.right);
  if (leftDeep === rightDeep) {
    return [leftDeep + 1, node];
  } else if (leftDeep > rightDeep) {
    return [leftDeep + 1, leftNode];
  }
  return [rightDeep + 1, rightNode];
}
