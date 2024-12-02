import { TreeNode } from "../common";

export function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  preorder(root, result);
  return result;
}

function preorder(node: TreeNode | null, result: number[]) {
  if (node === null) {
    return;
  }
  result.push(node.val);
  preorder(node.left, result);
  preorder(node.right, result);
}
