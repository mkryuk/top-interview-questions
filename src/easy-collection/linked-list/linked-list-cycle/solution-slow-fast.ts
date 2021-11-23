import { ListNode } from "../common";

export function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;
  while (fast && slow) {
    slow = slow?.next || null;
    fast = fast?.next?.next || null;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
