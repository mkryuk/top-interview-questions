import { arrayToList, listToArray } from "../common";
import { removeZeroSumSublists } from "./solution";

describe("Remove Zero Sum Consecutive Nodes from Linked List:", () => {
  it("removeZeroSumSublists should return [3,1] for head = [1,2,-3,3,1]", () => {
    const nodes = [1, 2, -3, 3, 1];
    const head = arrayToList(nodes);
    const resultHead = removeZeroSumSublists(head);
    const result = listToArray(resultHead);
    expect(result).toEqual([3, 1]);
  });

  it("removeZeroSumSublists should return [1,2,4] for head = [1,2,3,-3,4]", () => {
    const nodes = [1, 2, 3, -3, 4];
    const head = arrayToList(nodes);
    const resultHead = removeZeroSumSublists(head);
    const result = listToArray(resultHead);
    expect(result).toEqual([1, 2, 4]);
  });

  it("removeZeroSumSublists should return [1] for head = [1,2,3,-3,-2]", () => {
    const nodes = [1, 2, 3, -3, -2];
    const head = arrayToList(nodes);
    const resultHead = removeZeroSumSublists(head);
    const result = listToArray(resultHead);
    expect(result).toEqual([1]);
  });
});
