import { arrayToList, listToArray } from "../common";
import { doubleIt } from "./solution";

describe("Double a Number Represented as a Linked List", () => {
  it("doubleIt should return [3,7,8] for head = [1,8,9]", () => {
    const nodes = [1, 8, 9];
    const head = arrayToList(nodes);
    const result = doubleIt(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([3, 7, 8]);
  });

  it("doubleIt should return [1,9,9,8] for head = [9,9,9]", () => {
    const nodes = [9, 9, 9];
    const head = arrayToList(nodes);
    const result = doubleIt(head);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 9, 9, 8]);
  });
});
