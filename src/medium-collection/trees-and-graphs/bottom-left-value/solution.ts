import { TreeNode } from "../common";

export function findBottomLeftValue(root: TreeNode | null): number {
  let depth = -1;
  let result = root!.val;
  function dfs(node: TreeNode, level: number) {
    if (level > depth) {
      depth = level;
      result = node.val;
    }
    if (node.left !== null) {
      dfs(node.left, level + 1);
    }
    if (node.right !== null) {
      dfs(node.right, level + 1);
    }
  }
  dfs(root!, 0);
  return result;
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
