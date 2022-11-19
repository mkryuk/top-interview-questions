import { TreeNode } from "../common";

// time complexity: O(d^2) = O(log^2N) where d is a tree depth
export function countNodes(root: TreeNode | null): number {
  // if the tree is empty
  if (root == null) {
    return 0;
  }

  let d = getDepth(root);
  // if the tree contains 1 node
  if (d == 0) {
    return 1;
  }

  // Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
  // Perform binary search to check how many nodes exist.
  let left = 0;
  let right = Math.pow(2, d) - 1;
  let pivot;
  while (left <= right) {
    pivot = left + Math.trunc((right - left) / 2);
    if (exists(pivot, d, root)) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  // The tree contains 2**d - 1 nodes on the first (d - 1) levels
  // and left nodes on the last level.
  return Math.pow(2, d) - 1 + left;
}

function getDepth(node: TreeNode | null): number {
  let depth = 0;
  while (node && node.left) {
    node = node.left;
    depth++;
  }
  return depth;
}

function exists(idx: number, depth: number, node: TreeNode | null): boolean {
  let left = 0;
  let right = Math.pow(2, depth) - 1;
  let pivot;
  for (let i = 0; i < depth; ++i) {
    pivot = left + Math.trunc((right - left) / 2);
    if (idx <= pivot) {
      node = node?.left ?? null;
      right = pivot;
    } else {
      node = node?.right ?? null;
      left = pivot + 1;
    }
  }
  return node !== null;
}
