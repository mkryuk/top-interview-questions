import { arrayToList, listToArray } from "../common";
import { middleNode } from "./solution";

it("middleNode should return [1] for head = [1]", () => {
  const nodes = [1];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([1]);
});

it("middleNode should return [2] for head = [1,2]", () => {
  const nodes = [1, 2];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([2]);
});

it("middleNode should return [2,3] for head = [1,2,3]", () => {
  const nodes = [1, 2, 3];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([2, 3]);
});

it("middleNode should return [2,3,4] for head = [1,2,3,4]", () => {
  const nodes = [1, 2, 3, 4];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([3, 4]);
});

it("middleNode should return [3,4,5] for head = [1,2,3,4,5]", () => {
  const nodes = [1, 2, 3, 4, 5];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([3, 4, 5]);
});

it("middleNode should return [4,5,6] for head = [1,2,3,4,5,6]", () => {
  const nodes = [1, 2, 3, 4, 5, 6];
  const head = arrayToList(nodes);
  const node = middleNode(head);
  const result = listToArray(node);
  expect(result).toEqual([4, 5, 6]);
});
