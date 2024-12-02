import { TreeNode } from "../common";

export function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  let result: number[] = [];
  let stack: TreeNode[] = [root];
  while (stack.length > 0) {
    const node = stack.pop()!;
    result.push(node.val);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return result;
}
