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

  constructor(val?: number, random?: Node | null, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random ?? null;
  }
}

export type NullableNode = Node | null;

export function arrayToNode(nodes: (number | null)[][]): NullableNode {
  if (nodes.length === 0) {
    return null;
  }
  let head: Node = new Node();
  let currentNode: Node | null = head;
  for (let i = 0; i < nodes.length; i++) {
    const node = new Node(nodes[i][0]!);
    currentNode.next = node;
    currentNode = node;
  }
  // set random node
  currentNode = head.next;
  for (let i = 0; i < nodes.length; i++) {
    currentNode!.random = getNodeByIndex(head.next, nodes[i][1]);
    currentNode = currentNode!.next;
  }

  return head.next;
}

export function nodeToArray(list: Node | null): (number | null)[][] {
  let result = [];
  let step: Node | null = list;
  while (step) {
    result.push([step.val, getIndexByNode(list, step.random)]);
    step = step.next;
  }
  return result;
}

function getNodeByIndex(list: Node | null, index: number | null): Node | null {
  let step: Node | null = list;
  if (index === null) {
    return (step!.random = null);
  }
  let i = 0;
  while (step && i < index) {
    step = step.next;
    i++;
  }
  return step;
}

function getIndexByNode(list: Node | null, node: Node | null): number | null {
  if (node === null) {
    return null;
  }
  let step: Node | null = list;
  let i = 0;
  while (step && step !== node) {
    step = step.next;
    i++;
  }
  return step ? i : null;
}
