import { TreeNode } from "../common";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let result: number[][] = [];
  addLevel(root, result, 0);
  return result;
}

function addLevel(
  node: TreeNode | null,
  levels: number[][],
  level: number
): void {
  if (!node) {
    return;
  }
  if (levels.length === level) {
    levels[level] = [];
  }
  if (level % 2 === 0) {
    levels[level].push(node.val);
  } else {
    levels[level].unshift(node.val);
  }
  addLevel(node.left, levels, level + 1);
  addLevel(node.right, levels, level + 1);
}
