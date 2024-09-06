import { arrayToList, listToArray } from "../common";
import { modifiedList } from "./solution";

describe("Delete Nodes From Linked List Present in Array", () => {
  it("modifiedList should return [4,5] for nums = [1,2,3], head = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3];
    const nodes = [1, 2, 3, 4, 5];
    const head = arrayToList(nodes);
    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([4, 5]);
  });

  it("modifiedList should return [2,2,2] for nums = [1], head = [1,2,1,2,1,2]", () => {
    const nums = [1];
    const nodes = [1, 2, 1, 2, 1, 2];
    const head = arrayToList(nodes);
    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([2, 2, 2]);
  });
  it("modifiedList should return [1,2,3,4] for nums = [5], head = [1,2,3,4]", () => {
    const nums = [5];
    const nodes = [1, 2, 3, 4];
    const head = arrayToList(nodes);
    const result = modifiedList(nums, head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2, 3, 4]);
  });
});
