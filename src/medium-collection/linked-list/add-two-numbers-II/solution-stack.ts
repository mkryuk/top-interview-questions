import { ListNode } from "../common";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let l1Stack = createStack(l1);
  let l2Stack = createStack(l2);
  let head = new ListNode();

  while (l1Stack.length || l2Stack.length) {
    let sum = head.val + (l1Stack.pop() ?? 0) + (l2Stack.pop() ?? 0);
    head.val = sum % 10;
    let carry = Math.trunc(sum / 10);
    let node = new ListNode(carry);
    node.next = head;
    head = node;
  }
  return head.val === 0 ? head.next : head;
}

function createStack(list: ListNode | null): number[] {
  let stack: number[] = [];
  let head = list;
  while (head) {
    stack.push(head.val);
    head = head.next;
  }
  return stack;
}
