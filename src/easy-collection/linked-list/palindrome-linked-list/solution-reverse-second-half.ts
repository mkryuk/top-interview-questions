import { NullableListNode } from "../common";

export function isPalindrome(head: NullableListNode): boolean {
  if (!head) {
    return true;
  }
  // Find the end of first half and reverse second half.
  let firstHalfEnd: NullableListNode = endOfFirstHalf(head);
  let secondHalfStart: NullableListNode = reverseList(
    firstHalfEnd?.next ?? null
  );

  // Check whether or not there is a palindrome.
  let p1: NullableListNode = head;
  let p2: NullableListNode = secondHalfStart;
  let result = true;
  while (result && p2) {
    if (p1?.val !== p2.val) {
      result = false;
    }
    p1 = p1?.next ?? null;
    p2 = p2.next;
  }

  // Restore the list and return the result.
  if (firstHalfEnd) {
    firstHalfEnd.next = reverseList(secondHalfStart);
  }
  return result;
}

function endOfFirstHalf(head: NullableListNode): NullableListNode {
  let fast: NullableListNode = head;
  let slow: NullableListNode = head;
  while (fast?.next && fast?.next.next) {
    fast = fast?.next.next;
    slow = slow?.next ?? null;
  }
  return slow;
}

function reverseList(head: NullableListNode): NullableListNode {
  let prev: NullableListNode = null;
  let curr: NullableListNode = head;
  while (curr) {
    let nextTemp: NullableListNode = curr?.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
