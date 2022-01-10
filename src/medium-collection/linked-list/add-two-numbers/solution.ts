import { ListNode } from "../common";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = new ListNode(0);
  let currentNode = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    let left = l1?.val ?? 0;
    let right = l2?.val ?? 0;
    let sum = left + right + carry;
    carry = Math.trunc(sum / 10);
    currentNode.next = new ListNode(sum % 10);
    currentNode = currentNode.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return result.next;
}
