import { TreeNode } from "../common";

let preorderIndex: number;
let inorderMap: Map<number, number>;

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  preorderIndex = 0;
  // create an inorder map to find index by value in O(1)
  // for (let i = 0; i < inorder.length; i++) {
  //   inorderMap.set(inorder[i], i);
  // }
  inorderMap = new Map<number, number>(inorder.map((value, index) => [value, index]));

  return arrayToTree(preorder, 0, preorder.length - 1);
}

function arrayToTree(preorder: number[], left: number, right: number): TreeNode | null {
  if (left > right) {
    return null;
  }
  let rootValue = preorder[preorderIndex++];
  let root = new TreeNode(rootValue);
  let inorderIndex = inorderMap.get(rootValue) ?? 0;
  root.left = arrayToTree(preorder, left, inorderIndex - 1);
  root.right = arrayToTree(preorder, inorderIndex + 1, right);
  return root;
}
