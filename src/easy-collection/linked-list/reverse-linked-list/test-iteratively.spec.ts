import { arrayToList, listToArray } from "../common";
import { reverseList } from "./solution-iteratively";

it("reverseList should return [5,4,3,2,1] for head = [1,2,3,4,5]", function () {
  const head = [1, 2, 3, 4, 5];
  const list = arrayToList(head);
  const result = reverseList(list);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([5, 4, 3, 2, 1]);
});

it("reverseList should return [2,1] for head = [1,2]", function () {
  const head = [1, 2];
  const list = arrayToList(head);
  const result = reverseList(list);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([2, 1]);
});

it("reverseList should return [] for head = []", function () {
  const head: number[] = [];
  const list = arrayToList(head);
  const result = reverseList(list);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([]);
});
