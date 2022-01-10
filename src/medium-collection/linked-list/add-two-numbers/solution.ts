import { ListNode } from "../common";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result: ListNode | null = null;
  let currentNode: ListNode | null = null;
  let overflow = 0;
  while (l1 || l2 || overflow !== 0) {
    let left = l1?.val ?? 0;
    let right = l2?.val ?? 0;
    let sum = left + right + overflow;
    let val = sum % 10;
    let tempNode = new ListNode();
    tempNode.val = val;
    if (result === null) {
      result = tempNode;
      currentNode = result;
    } else {
      if (currentNode) {
        currentNode.next = tempNode;
        currentNode = currentNode.next;
      }
    }
    overflow = Math.trunc(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  return result;
}
