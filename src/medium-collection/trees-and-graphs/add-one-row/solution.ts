import { TreeNode } from "../common";

export function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number,
): TreeNode | null {
  if (depth === 1) {
    return new TreeNode(val, root);
  }

  let queue: TreeNode[] = [root!];
  let currDepth = 1;

  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift()!;
      // Check if the current depth is the one right before the target depth.
      if (currDepth === depth - 1) {
        // Create new nodes with the given value and adjust their children.
        let leftNode = new TreeNode(val, node.left, null);
        let rightNode = new TreeNode(val, null, node.right);

        // Set the new nodes as the children of the current node.
        node.left = leftNode;
        node.right = rightNode;
      }

      // Enqueue the children of the current node if they are not null.
      if (node.left !== null && currDepth < depth - 1) {
        queue.push(node.left);
      }
      if (node.right !== null && currDepth < depth - 1) {
        queue.push(node.right);
      }
    }
    // Increment depth after processing all nodes at the current level.
    currDepth++;
  }

  // Return the modified tree root.
  return root;
}
