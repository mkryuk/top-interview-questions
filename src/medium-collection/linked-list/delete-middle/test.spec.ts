import { arrayToList, listToArray } from "../common";
import { deleteMiddle } from "./solution";

describe("2095. Delete the Middle Node of a Linked List:", () => {
  it("deleteMiddle should return [1,3,4,1,2,6] for head = [1,3,4,7,1,2,6]", () => {
    const nodes = [1, 3, 4, 7, 1, 2, 6];
    const head = arrayToList(nodes);
    const result = deleteMiddle(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 3, 4, 1, 2, 6]);
  });

  it("deleteMiddle should return [1,2,4] for head = [1,2,3,4]", () => {
    const nodes = [1, 2, 3, 4];
    const head = arrayToList(nodes);
    const result = deleteMiddle(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2, 4]);
  });

  it("deleteMiddle should return [2] for head = [2,1]", () => {
    const nodes = [2, 1];
    const head = arrayToList(nodes);
    const result = deleteMiddle(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([2]);
  });
});
