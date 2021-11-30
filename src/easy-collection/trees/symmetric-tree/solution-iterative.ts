import { TreeNode } from "../common";

export function isSymmetric(root: TreeNode | null): boolean {
  let stack: { left: TreeNode | null; right: TreeNode | null }[] = [];
  stack.push({ left: root?.left || null, right: root?.right || null });
  while (stack.length) {
    let pair = stack.pop();
    if (pair?.left?.val !== pair?.right?.val) {
      return false;
    }
    if (pair?.left?.left || pair?.right?.right) {
      stack.push({
        left: pair?.left?.left || null,
        right: pair?.right?.right || null,
      });
    }
    if (pair?.left?.right || pair?.right?.left) {
      stack.push({
        left: pair?.left?.right || null,
        right: pair?.right?.left || null,
      });
    }
  }
  return true;
}
