import { arrayToList, listToArray } from "../common";
import { mergeNodes } from "./solution";

describe("Merge Nodes in Between Zeros", () => {
  it("mergeNodes should return [4,11] for head = [0,3,1,0,4,5,2,0]", () => {
    const nodes = [0, 3, 1, 0, 4, 5, 2, 0];
    const head = arrayToList(nodes);
    const result = mergeNodes(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([4, 11]);
  });

  it("mergeNodes should return [1,3,4] for head = [0,1,0,3,0,2,2,0]", () => {
    const nodes = [0, 1, 0, 3, 0, 2, 2, 0];
    const head = arrayToList(nodes);
    const result = mergeNodes(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 3, 4]);
  });
});
