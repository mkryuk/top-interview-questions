import { TreeNode } from "../common";

export function getMinimumDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = [];
  let currentNode: TreeNode | null = root;
  let result = Infinity;

  let prevNode: TreeNode | null = null;
  // In-order traversal
  while (stack.length !== 0 || currentNode !== null) {
    if (currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
      continue;
    }
    currentNode = stack.pop()!;
    if (prevNode !== null) {
      result = Math.min(result, currentNode.val - prevNode.val);
    }
    prevNode = currentNode;
    currentNode = currentNode.right;
  }

  return result;
}
