import { TreeNode } from "../common";

export function bstToGst(root: TreeNode | null): TreeNode | null {
  updateTree(0, root);
  return root;
}

function updateTree(val: number, node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }
  let rightSubtree = updateTree(val, node.right);
  let nodeVal = node.val;
  node.val += val + rightSubtree;
  let leftSubtree = updateTree(node.val, node.left);
  return nodeVal + leftSubtree + rightSubtree;
}
