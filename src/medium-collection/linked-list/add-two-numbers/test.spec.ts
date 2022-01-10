import { addTwoNumbers } from "./solution";
import { arrayToList, listToArray } from "../common";

it("addTwoNumbers should return [7,0,8] for l1 = [2,4,3], l2 = [5,6,4]", function () {
  const l1 = [2, 4, 3],
    l2 = [5, 6, 4];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([7, 0, 8]);
});

it("addTwoNumbers should return [0] for l1 = [0], l2 = [0]", function () {
  const l1 = [0],
    l2 = [0];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([0]);
});

it("addTwoNumbers should return [8,9,9,9,0,0,0,1] for l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", function () {
  const l1 = [9, 9, 9, 9, 9, 9, 9],
    l2 = [9, 9, 9, 9];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});

it("addTwoNumbers should return [2,1] for l1 = [2], l2 = [0,1]", function () {
  const l1 = [2],
    l2 = [0, 1];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([2, 1]);
});

it("addTwoNumbers should return [0,2] for l1 = [1], l2 = [9,1]", function () {
  const l1 = [1],
    l2 = [9, 1];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([0, 2]);
});

it("addTwoNumbers should return [0,0,1] for l1 = [1], l2 = [9,9]", function () {
  const l1 = [1],
    l2 = [9, 9];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([0, 0, 1]);
});

it("addTwoNumbers should return [5] for l1 = [2], l2 = [3]", function () {
  const l1 = [2],
    l2 = [3];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([5]);
});

it("addTwoNumbers should return [7,1] for l1 = [8], l2 = [9]", function () {
  const l1 = [8],
    l2 = [9];
  const list1 = arrayToList(l1),
    list2 = arrayToList(l2);
  const result = addTwoNumbers(list1, list2);
  const arrayResult = listToArray(result);
  expect(arrayResult).toEqual([7, 1]);
});
