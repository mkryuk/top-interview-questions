import { ListNode } from "../common";

export function getDecimalValue(head: ListNode | null): number {
  let current = head;
  let result = 0;
  while (current !== null) {
    result = (result << 1) | current.val;
    current = current.next;
  }

  return result;
}
