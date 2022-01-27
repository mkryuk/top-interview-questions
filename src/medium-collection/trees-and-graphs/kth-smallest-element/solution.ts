import { TreeNode } from "../common";

export function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) {
    return 0;
  }

  let count = 1;
  let stack: TreeNode[] = [root];
  let visited = new Set<TreeNode>();
  while (stack.length) {
    let current: TreeNode | null = stack[0];
    if (current.left && !visited.has(current.left)) {
      current = current.left;
      stack.unshift(current);
      continue;
    }
    if (count === k) {
      return current.val;
    }
    count++;
    visited.add(current);
    stack.shift();
    if (current.right && !visited.has(current.right)) {
      current = current.right;
      stack.unshift(current);
      continue;
    }
  }

  return 0;
}
