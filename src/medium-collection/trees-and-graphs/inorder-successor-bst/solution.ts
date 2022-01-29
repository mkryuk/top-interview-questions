import { TreeNode } from "../common";

export function inorderSuccessor(
  root: TreeNode | null,
  p: TreeNode | null
): TreeNode | null {
  if (!root || !p) {
    return null;
  }
  const stack = [root];
  let node = root.left;
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop() ?? null;
    if (node && p && node.val > p.val) {
      return node;
    }
    node = node?.right ?? null;
  }
  return null;
}
