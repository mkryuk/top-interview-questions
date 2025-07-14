import { ListNode } from "../common";

export function getDecimalValue(head: ListNode | null): number {
  let bits: number[] = [];
  let current = head;
  while (current !== null) {
    bits.push(current.val);
    current = current.next;
  }
  let result = 0;
  for (let i = bits.length - 1; i >= 0; i--) {
    result += bits[i] * Math.pow(2, bits.length - i - 1);
  }

  return result;
}
