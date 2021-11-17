import { deleteNode, ListNode } from "./solution";

it("deleteNode should return [4,1,9] for head = [4,5,1,9], node = 5", function () {
  let head = [4, 5, 1, 9],
    node = 5;
  let root = arrayToList(head);
  let nodeToDelete = getNodeToDelete(root, node);
  deleteNode(nodeToDelete);
  const test = listToArray(root);
  expect(test).toEqual([4, 1, 9]);
});

it("deleteNode should return [4,5,9] for head = [4,5,1,9], node = 1", function () {
  const head = [4, 5, 1, 9],
    node = 1;
  const root = arrayToList(head);
  let nodeToDelete = getNodeToDelete(root, node);
  deleteNode(nodeToDelete);
  const test = listToArray(root);
  expect(test).toEqual([4, 5, 9]);
});

it("deleteNode should return [1,2,4] for head = [1,2,3,4], node = 3", function () {
  const head = [1, 2, 3, 4],
    node = 3;
  const root = arrayToList(head);
  let nodeToDelete = getNodeToDelete(root, node);
  deleteNode(nodeToDelete);
  const test = listToArray(root);
  expect(test).toEqual([1, 2, 4]);
});

it("deleteNode should return [1] for head = [0,1], node = 0", function () {
  const head = [0, 1],
    node = 0;
  const root = arrayToList(head);
  let nodeToDelete = getNodeToDelete(root, node);
  deleteNode(nodeToDelete);
  const test = listToArray(root);
  expect(test).toEqual([1]);
});

it("deleteNode should return [5,-99] for head = [-3,5,-99], node = -3", function () {
  const head = [-3, 5, -99],
    node = -3;
  const root = arrayToList(head);
  let nodeToDelete = getNodeToDelete(root, node);
  deleteNode(nodeToDelete);
  const test = listToArray(root);
  expect(test).toEqual([5, -99]);
});

function arrayToList(nodes: number[]): ListNode {
  let root: ListNode = new ListNode(nodes[0]);
  let currentNode: ListNode = root;
  for (let i = 1; i < nodes.length; i++) {
    const node = new ListNode(nodes[i]);
    currentNode.next = node;
    currentNode = node;
  }
  return root;
}

function getNodeToDelete(list: ListNode, node: number): ListNode {
  let step: ListNode = list;
  while (true) {
    if (step.val === node) {
      return step;
    }
    if (!step.next) {
      break;
    }
    step = step.next;
  }
  return step;
}

function listToArray(list: ListNode | null): number[] {
  let result = [];
  let step: ListNode | null = list;
  while (step) {
    result.push(step.val);
    step = step.next;
  }
  return result;
}
