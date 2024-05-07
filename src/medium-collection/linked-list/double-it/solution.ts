import { ListNode } from "../common";

export function doubleIt(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  // Reverse the linked list to handle doubling from the least significant digit.
  head = reverseList(head);

  let carry = 0;
  let temp = head;

  // Traverse the reversed list, double each digit, and handle carries.
  while (temp !== null) {
    const current = temp.val * 2 + carry;
    temp.val = current % 10;
    carry = Math.trunc(current / 10);
    temp = temp.next;
  }

  // Reverse the list again to restore the original order.
  head = reverseList(head);

  // If there's a carry left after the last digit, prepend a new node.
  if (carry > 0) {
    head = new ListNode(carry, head);
  }

  return head;
}

function reverseList(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  let prev: ListNode | null = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
