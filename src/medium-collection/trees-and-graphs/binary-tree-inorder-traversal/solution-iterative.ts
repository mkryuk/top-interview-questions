import { TreeNode } from "../common";

export function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  let queue = [root];
  let visitedNodes = new Set<TreeNode>();
  while (queue.length) {
    let node = queue[0];
    if (node && node.left && !visitedNodes.has(node.left)) {
      queue.unshift(node.left);
    } else if (node && !visitedNodes.has(node)) {
      result.push(node.val);
      visitedNodes.add(node);
    } else if (node && node.right && !visitedNodes.has(node.right)) {
      queue.unshift(node.right);
    } else {
      queue.shift();
    }
  }
  return result;
}
