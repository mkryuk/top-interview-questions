import { ListNode } from "../common";

export function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let start = new ListNode(0, head);
  let slow: ListNode | null = start;
  let fast: ListNode | null = start;
  while (fast && slow) {
    fast = fast.next?.next ?? null;
    slow = slow.next;
    if (fast === slow) {
      slow = start;
      while (slow !== fast) {
        slow = slow!.next;
        fast = fast!.next;
      }
      return slow;
    }
  }
  return null;
}
