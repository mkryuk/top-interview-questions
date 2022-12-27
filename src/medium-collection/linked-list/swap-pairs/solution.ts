import { ListNode } from "../common";

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let prev: ListNode | null = new ListNode();
  let left: ListNode | null = head;
  let right: ListNode | null = head.next;
  head = right;
  while (left && right) {
    left.next = right.next;
    right.next = left;
    prev.next = right;
    prev = left;
    right = left.next?.next ?? null;
    left = left.next;
  }
  return head;
}
