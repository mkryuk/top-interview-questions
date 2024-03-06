import { TreeNode } from "../common";

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  targetSum -= root.val;
  if (root.left === null && root.right === null) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
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

    if (currentNode !== undefined && arr[i] !== undefined) {
      currentNode.left = new TreeNode(arr[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if (currentNode !== undefined && arr[i] !== undefined) {
      currentNode.right = new TreeNode(arr[i]!);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}
