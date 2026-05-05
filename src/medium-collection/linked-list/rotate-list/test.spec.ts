import { arrayToList, listToArray } from "../common";
import { rotateRight } from "./solution";

describe("61. Rotate List:", () => {
  it("rotateRight should return [4,5,1,2,3] for head = [1,2,3,4,5], k = 2", () => {
    const head = [1, 2, 3, 4, 5];
    const headList = arrayToList(head);
    const k = 2;
    const result = rotateRight(headList, k);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([4, 5, 1, 2, 3]);
  });

  it("rotateRight should return [2,0,1] for head = [0,1,2], k = 4", () => {
    const head = [0, 1, 2];
    const headList = arrayToList(head);
    const k = 4;
    const result = rotateRight(headList, k);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([2, 0, 1]);
  });
});
