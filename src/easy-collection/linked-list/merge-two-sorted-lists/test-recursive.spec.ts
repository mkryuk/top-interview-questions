import { mergeTwoLists } from "./solution-recursive";
import { arrayToList, listToArray } from "../common";

it("mergeTwoLists should return [1,1,2,3,4,4] for l1 = [1,2,4], l2 = [1,3,4]", function () {
  const l1 = [1, 2, 4],
    l2 = [1, 3, 4];
  const list1 = arrayToList(l1);
  const list2 = arrayToList(l2);
  const result = mergeTwoLists(list1, list2);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([1, 1, 2, 3, 4, 4]);
});

it("mergeTwoLists should return [] for l1 = [], l2 = []", function () {
  const l1: number[] = [],
    l2: number[] = [];
  const list1 = arrayToList(l1);
  const list2 = arrayToList(l2);
  const result = mergeTwoLists(list1, list2);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([]);
});

it("mergeTwoLists should return [0] for l1 = [], l2 = [0]", function () {
  const l1: number[] = [],
    l2 = [0];
  const list1 = arrayToList(l1);
  const list2 = arrayToList(l2);
  const result = mergeTwoLists(list1, list2);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([0]);
});
