import { ListNode } from "../common";

export function isPalindrome(head: ListNode | null): boolean {
  if (head && !head.next) {
    return true;
  }

  let slow: ListNode | null = head?.next || null;
  let fast: ListNode | null = head?.next?.next || null;
  let temp: ListNode | null = head;
  if (temp) {
    temp.next = null;
  }

  // move slow pointer to the middle & reverse first part of the list
  while (fast && fast.next) {
    head = slow;
    slow = slow?.next || null;
    fast = fast.next.next;
    if (head) {
      head.next = temp;
    }
    temp = head;
  }

  // if list length is odd move slow pointer one ahead
  if (fast && !fast.next) {
    slow = slow?.next || null;
  }

  // head is reversed and started from the middle to the reversed direction (left)
  // slow is not reversed and started from the middle to the right
  while (head && slow) {
    if (head.val !== slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }

  return true;
}
