import { ListNode } from "../common";

export function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;
  while (current) {
    let tempNode = current.next;
    current.next = prev;
    prev = current;
    current = tempNode;
  }
  return prev;
}
