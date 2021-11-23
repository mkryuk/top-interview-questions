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

export function getNodeToDelete(
  list: ListNode | null,
  node: number
): ListNode | null {
  let step = list;
  while (true) {
    if (step?.val === node) {
      return step;
    }
    if (!step?.next) {
      break;
    }
    step = step.next;
  }
  return step;
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

export function createLoop(
  head: ListNode | null,
  pos: number
): ListNode | null {
  if (pos === -1) {
    return head;
  }
  let current = head;
  for (let i = 0; i < pos && current; i++) {
    current = current?.next || null;
  }
  const loopNode = current;
  while (current?.next) {
    current = current.next;
  }
  if (current && loopNode) {
    current.next = loopNode;
  }
  return head;
}
