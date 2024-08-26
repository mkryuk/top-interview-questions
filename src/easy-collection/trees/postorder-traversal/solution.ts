import { TreeNode } from "../common";

export function postorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [root];
  while (stack.length > 0) {
    let node = stack.pop()!;
    result.push(node.val);
    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }
  return result.reverse();
}
