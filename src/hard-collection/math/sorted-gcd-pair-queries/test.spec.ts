import { gcdValues } from "./solution";

describe("3312. Sorted GCD Pair Queries:", () => {
  it("gcdValues should return [1,2,2] for nums = [2,3,4], queries = [0,2,2]", () => {
    const nums = [2, 3, 4];
    const queries = [0, 2, 2];
    const result = gcdValues(nums, queries);
    expect(result).toEqual([1, 2, 2]);
  });

  it("gcdValues should return [4,2,1,1] for nums = [4,4,2,1], queries = [5,3,1,0]", () => {
    const nums = [4, 4, 2, 1];
    const queries = [5, 3, 1, 0];
    const result = gcdValues(nums, queries);
    expect(result).toEqual([4, 2, 1, 1]);
  });

  it("gcdValues should return [2,2] for nums = [2,2], queries = [0,0]", () => {
    const nums = [2, 2];
    const queries = [0, 0];
    const result = gcdValues(nums, queries);
    expect(result).toEqual([2, 2]);
  });
});
