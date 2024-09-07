import { ListNode } from "../common";

export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 && !l2) {
    return null;
  }
  let head = new ListNode();
  let currentNode = head;
  while (l1 !== null || l2 !== null) {
    if ((l1 && l2 && l1.val < l2.val) || (l1 && l2 === null)) {
      currentNode.next = l1;
      l1 = l1.next;
      currentNode = currentNode.next;
    } else if (l2) {
      currentNode.next = l2;
      l2 = l2.next;
      currentNode = currentNode.next;
    }
  }
  return head.next;
}
