import { resultsArray } from "./solution";

describe("Find the Power of K-Size Subarrays I", () => {
  it("resultsArray should return [3,4,-1,-1,-1] for nums = [1,2,3,4,3,2,5], k = 3", () => {
    const nums = [1, 2, 3, 4, 3, 2, 5];
    const k = 3;
    const result = resultsArray(nums, k);
    expect(result).toEqual([3, 4, -1, -1, -1]);
  });

  it("resultsArray should return [-1,-1] for nums = [2,2,2,2,2], k = 4", () => {
    const nums = [2, 2, 2, 2, 2];
    const k = 4;
    const result = resultsArray(nums, k);
    expect(result).toEqual([-1, -1]);
  });

  it("resultsArray should return [-1,3,-1,3,-1] for nums = [3,2,3,2,3,2], k = 2", () => {
    const nums = [3, 2, 3, 2, 3, 2];
    const k = 2;
    const result = resultsArray(nums, k);
    expect(result).toEqual([-1, 3, -1, 3, -1]);
  });
});
