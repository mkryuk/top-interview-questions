import { TreeNode } from "../common";

type StackElement = {
  node: TreeNode | null;
  state: "left" | "right" | "done";
};

export function findTilt(root: TreeNode | null): number {
  let totalTilt = 0;
  // Initialize the stack with the root node and its traversal state set to "left"
  const stack: StackElement[] = [{ node: root, state: "left" }];

  // Iterate until the stack is empty
  while (stack.length > 0) {
    const top = stack[stack.length - 1];

    // If the current node is null, just pop it from the stack and continue
    if (top.node === null) {
      stack.pop();
      continue;
    }

    // If the traversal state is "left", we need to visit the left child next
    if (top.state === "left") {
      stack.push({ node: top.node.left, state: "left" });
      top.state = "right";
    } else if (top.state === "right") {
      // If the traversal state is "right", we need to visit the right child next
      stack.push({ node: top.node.right, state: "left" });
      top.state = "done";
    } else {
      // If the traversal state is "done", we've visited both children
      // Now, we can calculate the tilt for the current node
      const leftSum = top.node.left ? top.node.left.val : 0;
      const rightSum = top.node.right ? top.node.right.val : 0;
      const tilt = Math.abs(leftSum - rightSum);
      totalTilt += tilt;

      // Update the node value with the sum of its subtree values
      top.node.val += leftSum + rightSum;
      // Pop the current node from the stack since we're done processing it
      stack.pop();
    }
  }

  return totalTilt;
}
