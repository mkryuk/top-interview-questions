import { TreeNode } from "../common";
export function longestZigZag(root: TreeNode | null): number {
  // Call the 'dfs' with initial direction as false (right)
  return dfs(root, false, 0);
}

// Define a 'dfs' function to perform a depth-first search on the tree
function dfs(node: TreeNode | null, goLeft: boolean, steps: number): number {
  // Base case: if the node is null, return the number of steps minus 1
  if (node === null) {
    return steps - 1;
  }

  // If the current direction is left (goLeft is true)
  if (goLeft) {
    // Calculate the length of the zigzag path that goes left from the current node
    const leftPathLength = dfs(node.left, false, steps + 1);
    // Return the maximum length of the left zigzag path and the right zigzag path starting from the current node
    return Math.max(leftPathLength, dfs(node.right, true, 1));
  } else {
    // Calculate the length of the zigzag path that goes right from the current node
    const rightPathLength = dfs(node.right, true, steps + 1);
    // Return the maximum length of the right zigzag path and the left zigzag path starting from the current node
    return Math.max(rightPathLength, dfs(node.left, false, 1));
  }
}
