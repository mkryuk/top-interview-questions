import { TreeNode } from "../common";

export function isCompleteTree(root: TreeNode | null): boolean {
  let queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let node = queue.shift();
    // If the node is null, we have reached the end of the tree and it is complete
    if (node === null) {
      return true;
    }
    // If the node has a left child but no right child, the tree is not complete
    if (!node?.left && node?.right) {
      return false;
    }
    // If the node has a left or right child, check if the next node in the queue is null
    if ((node?.left || node?.right) && queue[queue.length - 1] === null) {
      // If it is null, the tree is not complete
      return false;
    }
    // Add the left and right children of the node to the queue
    queue.push(node?.left ?? null);
    queue.push(node?.right ?? null);
  }

  // If the loop finishes without returning false, the tree is complete
  return true;
}
