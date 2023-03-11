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
    // we detected a cycle
    if (fast === slow) {
      // reset slow to start, leave fast where it is
      // iterate by one both slow and fast
      // the node at which they met is the start of the cycle
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
