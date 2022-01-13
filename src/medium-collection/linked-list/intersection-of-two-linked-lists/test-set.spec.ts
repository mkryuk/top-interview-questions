import { arrayToList, ListNode, listToArray } from "../common";
import { getIntersectionNode } from "./solution-set";

function composeIntersectionLists(
  listA: ListNode | null,
  listB: ListNode | null,
  skipA: number,
  skipB: number
) {
  let tempA = listA;
  let tempB = listB;
  for (let i = 0; i < skipA - 1; i++) {
    tempA = tempA?.next ?? null;
  }
  for (let i = 0; i < skipB - 1; i++) {
    tempB = tempB?.next ?? null;
  }
  if (tempA && tempB) {
    tempB.next = tempA.next;
  }
}

it("getIntersectionNode should return [8,4,5] for listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA=2, skipB=3", function () {
  const a = [4, 1, 8, 4, 5],
    b = [5, 6, 1, 8, 4, 5],
    skipA = 2,
    skipB = 3;
  let listA = arrayToList(a);
  let listB = arrayToList(b);
  composeIntersectionLists(listA, listB, skipA, skipB);
  const result = getIntersectionNode(listA, listB);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([8, 4, 5]);
});

it("getIntersectionNode should return [2,4] for listA = [1,9,1,2,4], listB = [3,2,4], skipA=3, skipB=1", function () {
  const a = [1, 9, 1, 2, 4],
    b = [3, 2, 4],
    skipA = 3,
    skipB = 1;
  const listA = arrayToList(a);
  const listB = arrayToList(b);
  composeIntersectionLists(listA, listB, skipA, skipB);
  const result = getIntersectionNode(listA, listB);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([2, 4]);
});

it("getIntersectionNode should return [] for listA = [2,6,4], listB = [1,5]", function () {
  const a = [2, 6, 4],
    b = [1, 5];
  const listA = arrayToList(a);
  const listB = arrayToList(b);
  const result = getIntersectionNode(listA, listB);
  const resultArray = listToArray(result);
  expect(resultArray).toEqual([]);
});
