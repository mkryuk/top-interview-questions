import { ListNode, listToArray, arrayToList } from "../common";
import { splitListToParts } from "./solution";

describe("Split Linked List in Parts", () => {
  it("splitListToParts should return [[1],[2],[3],[],[]] for head = [1,2,3], k = 5", () => {
    const nodes = [1, 2, 3];
    const k = 5;
    const head = arrayToList(nodes);
    const result = splitListToParts(head, k);
    expect(result.map((node) => listToArray(node))).toEqual([[1], [2], [3], [], []]);
  });

  it("splitListToParts should return [[1,2,3,4],[5,6,7],[8,9,10]] for head = [1,2,3,4,5,6,7,8,9,10], k = 3", () => {
    const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      k = 3;
    const head = arrayToList(nodes);
    const result = splitListToParts(head, k);
    expect(result.map((node) => listToArray(node))).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
    ]);
  });
});
