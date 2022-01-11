import { ListNode } from "../common";

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let oddTail = head;
  let evenHead = oddTail?.next ?? null;
  let evenTail = evenHead;
  while (oddTail && evenTail && evenTail?.next) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;
    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }
  oddTail.next = evenHead;
  return head;
}
