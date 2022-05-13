import { ListNode } from "../common";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let headBehind = new ListNode(0);
  headBehind.next = head;
  let second: ListNode | null = headBehind;
  let first = head;

  for (let i = 0; i < n; i++) {
    first = first?.next || null;
  }

  while (first != null) {
    second = second?.next || null;
    first = first.next;
  }
  if (second && second.next) {
    second.next = second.next.next;
  }
  return headBehind.next;
}
