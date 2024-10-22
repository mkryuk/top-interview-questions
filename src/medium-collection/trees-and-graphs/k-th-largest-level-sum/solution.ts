import { TreeNode } from "../common";

export function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return -1;
  }
  let queue: TreeNode[] = [];
  queue.push(root);
  const levelSums: number[] = [];

  while (queue.length > 0) {
    const levelLength = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift()!;
      levelSum += node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    levelSums.push(levelSum);
  }

  levelSums.sort((a, b) => b - a);

  return levelSums.length < k ? -1 : levelSums[k - 1];
}
