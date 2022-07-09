import { TreeNode } from "../common";

enum NodeState {
  BOTH_DONE = 0,
  LEFT_DONE = 1,
  BOTH_PENDING = 2,
}
export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let stack: [TreeNode | null, NodeState][] = [];

  // Initialize the stack with the root node.
  stack.push([root, NodeState.BOTH_PENDING]);

  // This flag is set when either one of p or q is found.
  let one_node_found = false;

  // This is used to keep track of the LCA.
  let LCA: TreeNode | null = null;

  // Child node
  let child_node: TreeNode | null = null;

  // We do a post order traversal of the binary tree using stack
  while (stack.length !== 0) {
    let [parent_node, parent_state] = stack[stack.length - 1];

    // If the parent_state is not equal to BOTH_DONE,
    // this means the parent_node can't be popped off yet.
    if (parent_state !== NodeState.BOTH_DONE) {
      // If both child traversals are pending
      if (parent_state === NodeState.BOTH_PENDING) {
        // Check if the current parent_node is either p or q.
        if (parent_node?.val === p?.val || parent_node?.val == q?.val) {
          // If one_node_found was set already, this means we have found
          // both the nodes.
          if (one_node_found) {
            return LCA;
          } else {
            // Otherwise, set one_node_found to True,
            // to mark one of p and q is found.
            one_node_found = true;

            // Save the current top element of stack as the LCA.
            [LCA] = stack[stack.length - 1];
          }
        }

        // If both pending, traverse the left child first
        child_node = parent_node!.left;
      } else {
        // traverse right child
        child_node = parent_node!.right;
      }

      // Update the node state at the top of the stack
      // Since we have visited one more child.
      stack.pop();
      stack.push([parent_node, parent_state - 1]);

      // Add the child node to the stack for traversal.
      if (child_node !== null) {
        stack.push([child_node, NodeState.BOTH_PENDING]);
      }
    } else {
      // If the parent_state of the node is both done,
      // the top node could be popped off the stack.
      // Update the LCA node to be the next top node.
      let [LCA_node] = stack.pop()!;
      if (LCA?.val === LCA_node?.val && one_node_found) {
        [LCA] = stack[stack.length - 1];
      }
    }
  }

  return null;
}
