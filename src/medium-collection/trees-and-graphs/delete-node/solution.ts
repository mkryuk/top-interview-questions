import { TreeNode } from "../common";

export function delNodes(
  root: TreeNode | null,
  to_delete: number[],
): Array<TreeNode | null> {
  if (!root) return [];

  const deleteSet = new Set(to_delete);
  const result: Array<TreeNode | null> = [];

  dfs(root, true, deleteSet, result);

  return result;
}

function dfs(
  node: TreeNode | null,
  isRoot: boolean,
  deleteSet: Set<number>,
  result: Array<TreeNode | null>,
): TreeNode | null {
  if (!node) {
    return null;
  }

  const isDeleted = deleteSet.has(node.val);

  if (isRoot && !isDeleted) {
    result.push(node);
  }

  node.left = dfs(node.left, isDeleted, deleteSet, result);
  node.right = dfs(node.right, isDeleted, deleteSet, result);

  return isDeleted ? null : node;
}
