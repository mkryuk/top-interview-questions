import { TreeNode } from "../common";

export function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  if (preorder.length === 1) {
    return root;
  }

  const leftSubtreeRootVal = preorder[1];
  const leftSubtreeSize = postorder.indexOf(leftSubtreeRootVal) + 1;
  root.left = constructFromPrePost(preorder.slice(1, leftSubtreeSize + 1), postorder.slice(0, leftSubtreeSize));
  root.right = constructFromPrePost(preorder.slice(leftSubtreeSize + 1), postorder.slice(leftSubtreeSize, -1));
  return root;
}
