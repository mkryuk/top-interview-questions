import { TreeNode } from "../common";

export function levelOrder(root: TreeNode | null): number[][] {
  let levels: number[][] = [];
  addLevel(root, levels, 0);
  return levels;
}

function addLevel(root: TreeNode | null, levels: number[][], level: number) {
  if (!root) {
    return;
  }
  if (levels.length === level) {
    levels[level] = [];
  }
  levels[level].push(root.val);

  addLevel(root.left, levels, level + 1);
  addLevel(root.right, levels, level + 1);
}
