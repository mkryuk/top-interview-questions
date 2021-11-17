// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
export function deleteNode(root: ListNode): void {
  root.val = root.next?.val || 0;
  root.next = root.next?.next || null;
}
