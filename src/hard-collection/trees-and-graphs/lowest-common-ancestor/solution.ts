import { TreeNode } from "../common";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  let [_, result] = searchDFS(root, p, q);
  return result;
}

function searchDFS(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): [found: boolean, node: TreeNode | null] {
  if (!root) {
    return [false, null];
  }
  let foundHere = false;
  if (root.val === p?.val || root.val === q?.val) {
    foundHere = true;
  }
  let [foundLeft, lNode] = searchDFS(root.left, p, q);
  let [foundRight, rNode] = searchDFS(root.right, p, q);
  let result: [found: boolean, node: TreeNode | null] = [foundLeft || foundRight || foundHere, lNode ?? rNode];
  if ((foundHere && (foundLeft || foundRight)) || (foundLeft && foundRight)) {
    result = [true, root];
  }

  return result;
}
