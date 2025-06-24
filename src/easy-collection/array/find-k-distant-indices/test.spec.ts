import { findKDistantIndices } from "./solution";

describe("2200. Find All K-Distant Indices in an Array", () => {
  it("findKDistantIndices should return [1,2,3,4,5,6] for nums = [3,4,9,1,3,9,5], key = 9, k = 1", () => {
    const nums = [3, 4, 9, 1, 3, 9, 5];
    const key = 9;
    const k = 1;
    const result = findKDistantIndices(nums, key, k);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("findKDistantIndices should return [0,1,2,3,4] for nums = [2,2,2,2,2], key = 2, k = 2", () => {
    const nums = [2, 2, 2, 2, 2];
    const key = 2;
    const k = 2;
    const result = findKDistantIndices(nums, key, k);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
});
