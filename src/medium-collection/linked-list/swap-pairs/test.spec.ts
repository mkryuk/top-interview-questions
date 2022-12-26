import { arrayToList, listToArray } from "../common";
import { swapPairs } from "./solution";

it("swapPairs should return [2,1,4,3] for head = [1,2,3,4]", () => {
  const nodes = [1, 2, 3, 4];
  const head = arrayToList(nodes);
  const result = swapPairs(head);
  const resultNodes = listToArray(result);
  expect(resultNodes).toEqual([2, 1, 4, 3]);
});

it("swapPairs should return [] for head = []", () => {
  const nodes: number[] = [];
  const head = arrayToList(nodes);
  const result = swapPairs(head);
  const resultNodes = listToArray(result);
  expect(resultNodes).toEqual([]);
});

it("swapPairs should return [1] for head = [1]", () => {
  const nodes = [1];
  const head = arrayToList(nodes);
  const result = swapPairs(head);
  const resultNodes = listToArray(result);
  expect(resultNodes).toEqual([1]);
});
