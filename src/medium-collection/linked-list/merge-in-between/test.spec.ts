import { arrayToList, listToArray } from "../common";
import { mergeInBetween } from "./solution";

describe("Merge In Between Linked Lists", () => {
  it("mergeInBetween should return [10,1,13,1000000,1000001,1000002,5] for list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]", () => {
    const nodes1 = [10, 1, 13, 6, 9, 5];
    const a = 3;
    const b = 4;
    const nodes2 = [1000000, 1000001, 1000002];
    const list1 = arrayToList(nodes1);
    const list2 = arrayToList(nodes2);
    const resultList = mergeInBetween(list1, a, b, list2);
    const result = listToArray(resultList);
    expect(result).toEqual([10, 1, 13, 1000000, 1000001, 1000002, 5]);
  });

  it("mergeInBetween should return [0,1,1000000,1000001,1000002,1000003,1000004,6] for list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]", () => {
    const nodes1 = [0, 1, 2, 3, 4, 5, 6];
    const a = 2;
    const b = 5;
    const nodes2 = [1000000, 1000001, 1000002, 1000003, 1000004];
    const list1 = arrayToList(nodes1);
    const list2 = arrayToList(nodes2);
    const resultList = mergeInBetween(list1, a, b, list2);
    const result = listToArray(resultList);
    expect(result).toEqual([0, 1, 1000000, 1000001, 1000002, 1000003, 1000004, 6]);
  });
});
