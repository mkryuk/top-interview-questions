import { ListNode } from "../common";

export function pairSum(head: ListNode | null): number {
  let result = 0;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // Find the middle of the list
  // slow will be the middle
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // reverse second half of the list
  let prev: ListNode | null = null;
  while (slow) {
    const nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  // Prepare for the next phase: 'left' starts from the head of the list,
  // 'right' starts from the head of the reversed second half
  let left = head;
  let right = prev;

  // Traverse the original first half and the reversed second half
  // at the same time, summing up corresponding pairs
  // Keep track of the maximum sum obtained
  while (left && right) {
    result = Math.max(result, left.val + right.val);
    left = left.next;
    right = right.next;
  }

  // Return the maximum pair suma
  return result;
}
