import { TreeNode } from "../common";

export function balanceBST(root: TreeNode | null): TreeNode | null {
  let sortedArray: number[] = [];
  bstToArray(root, sortedArray);
  const result = createBst(sortedArray, 0, sortedArray.length - 1);
  return result;
}

function bstToArray(node: TreeNode | null, arr: number[]) {
  if (node === null) {
    return;
  }
  bstToArray(node.left, arr);
  arr.push(node.val);
  bstToArray(node.right, arr);
}

function createBst(arr: number[], left: number, right: number): TreeNode | null {
  if (left > right) {
    return null;
  }
  let mid = left + Math.floor((right - left) / 2);
  const node = new TreeNode(arr[mid]);
  node.left = createBst(arr, left, mid - 1);
  node.right = createBst(arr, mid + 1, right);
  return node;
}
