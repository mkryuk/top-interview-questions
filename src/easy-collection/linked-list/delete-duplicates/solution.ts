import { ListNode } from "../common";

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let result = new ListNode(head.val);
  let currentNode = result;
  while (head !== null) {
    if (head.val !== currentNode.val) {
      const node = new ListNode(head.val);
      currentNode.next = node;
      currentNode = node;
    }
    head = head.next;
  }
  return result;
}
