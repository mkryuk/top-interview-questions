import { ListNode } from "../common";

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null || k === 0) {
    return head;
  }

  const length = getLength(head);
  const rotations = k % length;

  if (rotations === 0) {
    return head;
  }

  return rotateByEffectiveK(head, length, rotations);
}

function getLength(head: ListNode): number {
  let length = 0;
  let current: ListNode | null = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  return length;
}

function rotateByEffectiveK(head: ListNode, length: number, k: number): ListNode {
  const stepsToNewTail = length - k - 1;
  let oldTail: ListNode = head;
  while (oldTail.next !== null) {
    oldTail = oldTail.next;
  }
  let newTail: ListNode = head;
  for (let i = 0; i < stepsToNewTail; i++) {
    if (newTail.next !== null) {
      newTail = newTail.next;
    }
  }

  const newHead = newTail.next as ListNode;

  // connect old tail to old head
  oldTail.next = head;

  // break the list after the new tail
  newTail.next = null;

  return newHead;
}
