import { TreeNode } from "../common";

export function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root === null) {
    return -1;
  }
  let stack: TreeNode[] = [];
  stack.push(root);
  let result: number[] = [];

  while (stack.length > 0) {
    let nextLevel: TreeNode[] = [];
    let levelSum = 0;
    while (stack.length > 0) {
      const node = stack.pop()!;
      levelSum += node.val;
      if (node.left !== null) {
        nextLevel.push(node.left);
      }
      if (node.right !== null) {
        nextLevel.push(node.right);
      }
    }
    result.push(levelSum);
    stack = nextLevel;
  }

  result.sort((a, b) => b - a);

  return result.length < k ? -1 : result[k - 1];
}
