import { TreeNode } from "../common";

export function largestValues(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  let queue: TreeNode[] = [root];
  let qIdx = 0;
  const result: number[] = [];
  while (queue.length - qIdx > 0) {
    const levelLength = queue.length - qIdx;
    let maxValue = -Infinity;
    for (let i = 0; i < levelLength; i++) {
      const node = queue[qIdx++];
      maxValue = Math.max(maxValue, node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result.push(maxValue);
  }
  return result;
}
