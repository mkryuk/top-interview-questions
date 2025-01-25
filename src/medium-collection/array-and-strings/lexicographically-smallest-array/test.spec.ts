import { lexicographicallySmallestArray } from "./solution";

describe("Make Lexicographically Smallest Array by Swapping Elements", () => {
  it("lexicographicallySmallestArray should return [1,3,5,8,9] for nums = [1,5,3,9,8], limit = 2", () => {
    const nums = [1, 5, 3, 9, 8];
    const limit = 2;
    const result = lexicographicallySmallestArray(nums, limit);
    expect(result).toEqual([1, 3, 5, 8, 9]);
  });

  it("lexicographicallySmallestArray should return [1,6,7,18,1,2] for nums = [1,7,6,18,2,1], limit = 3", () => {
    const nums = [1, 7, 6, 18, 2, 1];
    const limit = 3;
    const result = lexicographicallySmallestArray(nums, limit);
    expect(result).toEqual([1, 6, 7, 18, 1, 2]);
  });

  it("lexicographicallySmallestArray should return [1,7,28,19,10] for nums = [1,7,28,19,10], limit = 3", () => {
    const nums = [1, 7, 28, 19, 10];
    const limit = 3;
    const result = lexicographicallySmallestArray(nums, limit);
    expect(result).toEqual([1, 7, 28, 19, 10]);
  });
});
