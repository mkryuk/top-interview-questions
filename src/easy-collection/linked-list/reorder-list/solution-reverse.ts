import { ListNode } from "../common";

export function reorderList(head: ListNode | null): void {
  // find the middle of the list
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // reverse the second half
  let current = slow;
  let prev: ListNode | null = null;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // link them together
  let left = head;
  let right = prev;
  while (left && right) {
    let leftNext = left.next;
    let rightNext = right.next;
    left.next = right;
    right.next = leftNext;
    left = leftNext;
    right = rightNext;
  }
}
