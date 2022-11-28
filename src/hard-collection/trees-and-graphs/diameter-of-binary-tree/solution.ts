import { TreeNode } from "../common";

export function diameterOfBinaryTree(root: TreeNode | null): number {
  let [result] = getNodeLength(root);
  return result;
}

function getNodeLength(root: TreeNode | null): [d: number, l: number] {
  if (!root) {
    return [0, 0];
  }
  const [lDim, left] = getNodeLength(root.left);
  const [rDim, right] = getNodeLength(root.right);
  // get biggest diameter between current, left or right node
  const diameter = Math.max(left + right, lDim, rDim);
  // get longest path for the node including current node
  const length = Math.max(left + 1, right + 1);
  return [diameter, length];
}
