import { arrayToList, listToArray } from "../common";
import { mergeKLists } from "./solution";

it("mergeKLists should return [1,1,2,3,4,4,5,6] for lists = [[1,4,5],[1,3,4],[2,6]]", () => {
  const lists = [
    arrayToList([1, 4, 5]),
    arrayToList([1, 3, 4]),
    arrayToList([2, 6]),
  ];
  const result = mergeKLists(lists);
  expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4, 5, 6]);
});

it("mergeKLists should return [1,2,3,3,4,4,6,7,8,9,12,15] for lists = [[1,4,7,9],[3,3,4],[2,6,8,12,15]]", () => {
  const lists = [
    arrayToList([1, 4, 7, 9]),
    arrayToList([3, 3, 4]),
    arrayToList([2, 6, 8, 12, 15]),
  ];
  const result = mergeKLists(lists);
  expect(listToArray(result)).toEqual([1, 2, 3, 3, 4, 4, 6, 7, 8, 9, 12, 15]);
});

it("mergeKLists should return [] for lists = []", () => {
  const lists: null[] = [];
  const result = mergeKLists(lists);
  expect(result).toBeNull();
});

it("mergeKLists should return [] for lists = [[]]", () => {
  const lists = [arrayToList([])];
  const result = mergeKLists(lists);
  expect(result).toBeNull();
});
