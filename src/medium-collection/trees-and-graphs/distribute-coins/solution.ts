import { TreeNode } from "../common";

export function distributeCoins(root: TreeNode | null): number {
  let result = 0;

  function postorder(node: TreeNode | null): number {
    if (node === null) return 0;

    let leftExcess = postorder(node.left);
    let rightExcess = postorder(node.right);

    // The number of moves is the absolute sum of excess coins from left and right
    result += Math.abs(leftExcess) + Math.abs(rightExcess);

    // Return the excess coins of this node
    return node.val + leftExcess + rightExcess - 1;
  }

  postorder(root);
  return result;
}
