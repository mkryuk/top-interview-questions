import { ListNode } from "../common";

let frontPointer = new ListNode();
export function isPalindrome(head: ListNode | null): boolean {
  const [result] = isPalindromeRecurse(head, head, 0);
  return result;
}

function isPalindromeRecurse(
  head: ListNode | null,
  tail: ListNode | null,
  index: number
): [boolean, ListNode | null] {
  let result = true;
  if (tail && tail.next) {
    [result, head] = isPalindromeRecurse(head, tail.next, index++);
  }
  if (!result || head?.val !== tail?.val) {
    return [false, head];
  }
  return [true, head?.next || null];
}
