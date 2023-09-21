import { ListNode } from "../common";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;
  while (node !== null) {
    let next = node.next;
    while (next?.val === node.val) {
      next = next.next;
    }
    node.next = next;
    node = node.next;
  }
  return head;
}
