/**
 Do not return anything, modify it in-place instead.
 */
import { ListNode } from "../common";

export function deleteNode(root: ListNode): void {
  root.val = root.next?.val || 0;
  root.next = root.next?.next || null;
}
