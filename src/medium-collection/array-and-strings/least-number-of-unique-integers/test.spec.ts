import { findLeastNumOfUniqueInts } from "./solution";

describe("Least Number of Unique Integers after K Removals:", () => {
  it("findLeastNumOfUniqueInts should return 1 for arr = [5,5,4], k = 1", () => {
    const arr = [5, 5, 4];
    const k = 1;
    const result = findLeastNumOfUniqueInts(arr, k);
    expect(result).toEqual(1);
  });

  it("findLeastNumOfUniqueInts should return 2 for arr = [4,3,1,1,3,3,2], k = 3", () => {
    const arr = [4, 3, 1, 1, 3, 3, 2];
    const k = 3;
    const result = findLeastNumOfUniqueInts(arr, k);
    expect(result).toEqual(2);
  });
});
