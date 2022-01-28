import { TreeNode } from "../common";

export function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 1;
  let stack: TreeNode[] = [];
  while (true) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop() ?? null;
    if (root && count++ === k) {
      return root?.val;
    }
    root = root?.right ?? null;
  }
}
