import { TreeNode } from "../common";

export function isCompleteTree(root: TreeNode | null): boolean {
  let queue: (TreeNode | null)[] = [root];
  let isLastNode = false;

  while (queue.length) {
    let node = queue.shift();
    // If this is the last node, make a note of it
    if (node === null) {
      isLastNode = true;
      continue;
    }
    // If we've already seen the last node and we encounter a non-null node, the tree is not complete
    if (isLastNode) {
      return false;
    }
    // Add the left and right children of the node to the queue
    queue.push(node?.left ?? null);
    queue.push(node?.right ?? null);
  }

  // If we reach this point, the tree is complete
  return true;
}
