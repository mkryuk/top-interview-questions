import { TreeNode } from "../common";

export function isSymmetric(root: TreeNode | null): boolean {
  return isSymmetricNode(root?.left || null, root?.right || null);
}

function isSymmetricNode(left: TreeNode | null, right: TreeNode | null): boolean {
  if (left === null && right === null) {
    return true;
  }
  return (
    left?.val === right?.val &&
    isSymmetricNode(left?.left || null, right?.right || null) &&
    isSymmetricNode(left?.right || null, right?.left || null)
  );
}
