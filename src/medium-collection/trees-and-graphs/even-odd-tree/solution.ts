import { TreeNode } from "../common";

export function isEvenOddTree(root: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  let queue: TreeNode[] = [root];
  let level = 0;
  while (queue.length > 0) {
    const size = queue.length;
    let prevValue = level % 2 === 0 ? -Infinity : Infinity;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      if (
        (level % 2 === 0 && (node.val % 2 === 0 || node.val <= prevValue)) ||
        (level % 2 !== 0 && (node.val % 2 !== 0 || node.val >= prevValue))
      ) {
        return false;
      }
      prevValue = node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return true;
}
