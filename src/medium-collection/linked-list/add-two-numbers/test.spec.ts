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
