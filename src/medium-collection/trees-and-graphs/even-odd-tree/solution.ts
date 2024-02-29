import { TreeNode } from "../common";

export function isEvenOddTree(root: TreeNode | null): boolean {
  return false;
}

export function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const currentNode = queue.shift();

    if (currentNode !== undefined && arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if (currentNode !== undefined && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]!);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}
