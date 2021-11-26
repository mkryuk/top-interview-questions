import { TreeNode } from "../common";

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return getLevel(root, 1);
}

function getLevel(root: TreeNode | null, level: number): number {
  let leftLevel = root?.left ? getLevel(root?.left || null, level + 1) : level;
  let rightLevel = root?.right
    ? getLevel(root?.right || null, level + 1)
    : level;
  return leftLevel > rightLevel ? leftLevel : rightLevel;
}
