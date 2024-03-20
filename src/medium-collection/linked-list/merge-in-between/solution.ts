import { ListNode } from "../common";

export function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null,
): ListNode | null {
  let nodeA: ListNode | null = null;
  let nodeB: ListNode | null = null;
  let head: ListNode | null = list1;
  let index = 0;
  while (head !== null && index <= b + 1) {
    // the node before a position
    if (index === a - 1) {
      nodeA = head;
    }
    // the node after b position
    if (index === b) {
      nodeB = head.next;
    }
    head = head.next;
    index++;
  }
  nodeA!.next = list2;
  while (list2 && list2.next) {
    list2 = list2.next;
  }
  list2!.next = nodeB;
  return list1;
}
