import { arrayToList, listToArray } from "../common";
import { partition } from "./solution";

describe("Partition List:", () => {
  it("partition should return [1,2,2,4,3,5] for head = [1,4,3,2,5,2], x = 3", () => {
    const nodes = [1, 4, 3, 2, 5, 2];
    const head = arrayToList(nodes);
    const x = 3;
    const result = partition(head, x);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2, 2, 4, 3, 5]);
  });

  it("partition should return [1,2] for head = [2,1], x = 2", () => {
    const nodes = [2, 1];
    const head = arrayToList(nodes);
    const x = 2;
    const result = partition(head, x);
    const resultArray = listToArray(result);
    expect(resultArray).toEqual([1, 2]);
  });
});
