import { ListNode } from "../common";

export function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let current = head;
  while (current !== null && current.next !== null) {
    const divisor = gcd(current.val, current.next.val);
    const newNode = new ListNode(divisor, current.next);
    current.next = newNode;
    current = newNode.next;
  }
  return head;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
