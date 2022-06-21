import { arrayToList, listToArray } from "../common";
import { sortList } from "./solution";

it("sortList should return [1,2,3,4] for head = [4,2,1,3]", () => {
  const headArr = [4, 2, 1, 3];
  const head = arrayToList(headArr);
  const result = sortList(head);
  expect(listToArray(result)).toEqual([1, 2, 3, 4]);
});

it("sortList should return [-1,0,3,4,5] for head = [-1,5,3,4,0]", () => {
  const headArr = [-1, 5, 3, 4, 0];
  const head = arrayToList(headArr);
  const result = sortList(head);
  expect(listToArray(result)).toEqual([-1, 0, 3, 4, 5]);
});

it("sortList should return [-10,-2,0,1,2,5,7,9] for head = [-10,9,-2,7,0,5,2,1]", () => {
  const headArr = [-10, 9, -2, 7, 0, 5, 2, 1];
  const head = arrayToList(headArr);
  const result = sortList(head);
  expect(listToArray(result)).toEqual([-10, -2, 0, 1, 2, 5, 7, 9]);
});

it("sortList should return [] for head = []", () => {
  const headArr: number[] = [];
  const head = arrayToList(headArr);
  const result = sortList(head);
  expect(listToArray(result)).toEqual([]);
});
