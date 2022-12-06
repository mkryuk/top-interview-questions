import { arrayToList, listToArray } from "../common";
import { middleNode } from "./solution";

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
