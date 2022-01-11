import { oddEvenList } from "./solution";
import { arrayToList, listToArray } from "../common";

it("oddEvenList should return [1,3,5,2,4] for head = [1,2,3,4,5]", function () {
  const head = [1, 2, 3, 4, 5];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 3, 5, 2, 4]);
});

it("oddEvenList should return [2,3,6,7,1,5,4] for head = [2,1,3,5,6,4,7]", function () {
  const head = [2, 1, 3, 5, 6, 4, 7];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([2, 3, 6, 7, 1, 5, 4]);
});

it("oddEvenList should return [1,3,2,4] for head = [1,2,3,4]", function () {
  const head = [1, 2, 3, 4];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 3, 2, 4]);
});

it("oddEvenList should return [1,3,2] for head = [1,2,3]", function () {
  const head = [1, 2, 3];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 3, 2]);
});

it("oddEvenList should return [1,2] for head = [1,2]", function () {
  const head = [1, 2];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 2]);
});

it("oddEvenList should return [1] for head = [1]", function () {
  const head = [1];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1]);
});

it("oddEvenList should return [] for head = []", function () {
  const head: number[] = [];
  const headList = arrayToList(head);
  const result = oddEvenList(headList);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([]);
});
