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

export class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random ?? null;
  }
}

export type NullableNode = Node | null;
