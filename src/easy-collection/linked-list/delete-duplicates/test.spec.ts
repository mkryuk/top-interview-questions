import { arrayToList, listToArray } from "../common";
import { deleteDuplicates } from "./solution";

describe("Remove Duplicates from Sorted List:", () => {
  it("deleteDuplicates should return [1,2] for head = [1,1,2]", () => {
    const nodes = [1, 1, 2];
    const head = arrayToList(nodes);
    const result = deleteDuplicates(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2]);
  });

  it("deleteDuplicates should return [1,2,3] for head = [1,1,2,3,3]", () => {
    const nodes = [1, 1, 2, 3, 3];
    const head = arrayToList(nodes);
    const result = deleteDuplicates(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2, 3]);
  });
});
