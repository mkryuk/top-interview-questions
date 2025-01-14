import { findThePrefixCommonArray } from "./solution-set";

describe("Find the Prefix Common Array of Two Arrays", () => {
  it("findThePrefixCommonArray should return [0,2,3,4] for A = [1,3,2,4], B = [3,1,2,4]", () => {
    const A = [1, 3, 2, 4];
    const B = [3, 1, 2, 4];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual([0, 2, 3, 4]);
  });

  it("findThePrefixCommonArray should return [0,2,3,4] for A = [2,3,1], B = [3,1,2]", () => {
    const A = [2, 3, 1];
    const B = [3, 1, 2];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual([0, 1, 3]);
  });
});
