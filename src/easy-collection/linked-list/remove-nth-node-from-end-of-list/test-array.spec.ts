import { removeNthFromEnd } from "./solution-array";
import { arrayToList, listToArray } from "../common";

it("removeNthFromEnd should return [1,2,3,5] for head = [1,2,3,4,5], n = 2", function () {
  const head = [1, 2, 3, 4, 5],
    n = 2;
  const list = arrayToList(head);
  const result = removeNthFromEnd(list, n);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 2, 3, 5]);
});

it("removeNthFromEnd should return [] for head = [1], n = 1", function () {
  const head = [1],
    n = 1;
  const list = arrayToList(head);
  const result = removeNthFromEnd(list, n);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([]);
});

it("removeNthFromEnd should return [2] for head = [1,2], n = 2", function () {
  const head = [1, 2],
    n = 2;
  const list = arrayToList(head);
  const result = removeNthFromEnd(list, n);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([2]);
});

it("removeNthFromEnd should return [1] for head = [1,2], n = 1", function () {
  const head = [1, 2],
    n = 1;
  const list = arrayToList(head);
  const result = removeNthFromEnd(list, n);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1]);
});
