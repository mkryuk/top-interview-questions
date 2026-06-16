import { ListNode } from "../common";

export function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return null;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  if (prev !== null && slow !== null) {
    prev.next = slow.next;
  }

  return head;
}
