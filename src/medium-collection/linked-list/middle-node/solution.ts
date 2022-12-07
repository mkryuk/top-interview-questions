import { ListNode } from "../common";

export function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = new ListNode(0, head);
  let slow: ListNode | null = new ListNode(0, head);
  while (fast) {
    fast = fast.next?.next ?? null;
    slow = slow?.next ?? null;
  }
  return slow;
}
