// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export type NullableListNode = ListNode | null;

export function arrayToList(nodes: number[]): NullableListNode {
  if (nodes.length === 0) {
    return null;
  }
  let root: ListNode = new ListNode(nodes[0]);
  let currentNode: ListNode = root;
  for (let i = 1; i < nodes.length; i++) {
    const node = new ListNode(nodes[i]);
    currentNode.next = node;
    currentNode = node;
  }
  return root;
}

export function listToArray(list: ListNode | null): number[] {
  let result = [];
  let step: ListNode | null = list;
  while (step) {
    result.push(step.val);
    step = step.next;
  }
  return result;
}

export function composeIntersectionLists(listA: ListNode | null, listB: ListNode | null, skipA: number, skipB: number) {
  let tempA = listA;
  let tempB = listB;
  for (let i = 0; i < skipA - 1; i++) {
    tempA = tempA?.next ?? null;
  }
  for (let i = 0; i < skipB - 1; i++) {
    tempB = tempB?.next ?? null;
  }
  if (tempA && tempB) {
    tempB.next = tempA.next;
  }
}
