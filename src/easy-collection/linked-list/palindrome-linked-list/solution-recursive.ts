import { ListNode } from "../common";

let headPointer: ListNode | null;

export function isPalindrome(head: ListNode | null): boolean {
  headPointer = head;
  return isPalindromeRecurse(head);
}

function isPalindromeRecurse(current: ListNode | null): boolean {
  if (current !== null) {
    if (!isPalindromeRecurse(current.next)) {
      return false;
    }
    if (headPointer?.val !== current.val) {
      return false;
    }
    headPointer = headPointer.next;
  }
  return true;
}
