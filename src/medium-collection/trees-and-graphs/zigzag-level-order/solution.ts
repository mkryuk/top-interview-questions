import { TreeNode } from "../common";

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  let result: number[][] = [];
  let queue = [root];
  let level = 0;
  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      if (result.length === level) {
        result[level] = [];
      }
      const node = queue.shift();
      if (level % 2 === 0 && node) {
        result[level].push(node.val);
      } else if (level % 2 !== 0 && node) {
        result[level].unshift(node.val);
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return result;
}
