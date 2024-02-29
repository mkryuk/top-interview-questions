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
