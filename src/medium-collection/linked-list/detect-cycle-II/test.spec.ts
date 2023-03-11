import { arrayToList, ListNode } from "../common";
import { detectCycle } from "./solution";

describe("Linked List Cycle II", () => {
  it("detectCycle should return node at index 1 for head = [3,2,0,-4], pos = 1", () => {
    const head = [3, 2, 0, -4];
    const pos = 1;
    let root = createList(head, pos);
    let result = detectCycle(root);
    expect(result?.val).toEqual(2);
  });

  it("detectCycle should return node at index 0 for head = [1,2], pos = 0", () => {
    const head = [1, 2];
    const pos = 0;
    let root = createList(head, pos);
    let result = detectCycle(root);
    expect(result?.val).toEqual(1);
  });

  it("detectCycle should return null for head = [1], pos = -1", () => {
    const head = [1];
    const pos = -1;
    let root = createList(head, pos);
    let result = detectCycle(root);
    expect(result).toEqual(null);
  });

  it("detectCycle should return null for head = [], pos = -1", () => {
    const head: number[] = [];
    const pos = -1;
    let root = createList(head, pos);
    let result = detectCycle(root);
    expect(result).toEqual(null);
  });
});

function createList(nodes: number[], pos: number): ListNode | null {
  let root = arrayToList(nodes);
  if (root === null || pos === -1) {
    return root;
  }
  let nodeTo: ListNode | null = root;

  for (let i = 0; i < pos; i++) {
    nodeTo = nodeTo!.next ?? null;
  }
  let tail = root;
  while (tail && tail.next) {
    tail = tail.next;
  }
  tail.next = nodeTo;
  return root;
}
