import { TreeNode } from "../../trees-and-graphs/common";
import { ListNode } from "../common";

export function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (root === null) {
    return false;
  }
  return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
}

function dfs(head: ListNode | null, node: TreeNode | null): boolean {
  if (head === null) {
    return true;
  }
  if (node === null) {
    return false;
  }
  return head.val === node.val && (dfs(head.next, node.left) || dfs(head.next, node.right));
}
