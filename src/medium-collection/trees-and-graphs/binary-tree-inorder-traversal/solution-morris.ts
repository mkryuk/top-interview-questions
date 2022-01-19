import { TreeNode } from "../common";

// Morris Traversal
export function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  let curr = root;
  let pre: TreeNode | null = null;
  while (curr !== null) {
    if (curr.left === null) {
      result.push(curr.val);
      // move to next right node
      curr = curr.right;
    } else {
      // has a left subtree
      pre = curr.left;
      while (pre.right) {
        // find rightmost
        pre = pre.right;
      }
      // put curr after the pre node
      pre.right = curr;
      // store curr node
      let temp = curr;
      // move curr to the top of the new tree
      curr = curr.left;
      // original curr left be null, avoid infinite loops
      temp.left = null;
    }
  }
  return result;
}
