import { TreeNode } from "../common";

export function flipEquiv(
  root1: TreeNode | null,
  root2: TreeNode | null,
): boolean {
  if (root1 === null && root2 === null) {
    return true;
  }
  if (root1?.val !== root2?.val) {
    return false;
  }
  // it should be equal straight or flipped
  const straightEqual =
    root1 &&
    root2 &&
    root1?.left?.val === root2?.left?.val &&
    root1?.right?.val === root2?.right?.val;
  const flippedEqual =
    root1 &&
    root2 &&
    root1?.left?.val === root2?.right?.val &&
    root1?.right?.val === root2?.left?.val;
  if (!straightEqual && !flippedEqual) {
    return false;
  }
  if (straightEqual) {
    return (
      flipEquiv(root1?.left, root2?.left) && flipEquiv(root1.right, root2.right)
    );
  }
  return (
    flipEquiv(root1?.left, root2?.right) && flipEquiv(root1.right, root2.left)
  );
}
