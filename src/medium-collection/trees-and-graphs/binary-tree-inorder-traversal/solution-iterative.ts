import { TreeNode } from "../common";

export function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  let stack: TreeNode[] = [];
  let node = root;
  while (node !== null || stack.length) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop() ?? null;
    if (node !== null) {
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
}
