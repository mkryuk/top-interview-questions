import { maxSumOfThreeSubarrays } from "./solution";

describe("Maximum Sum of 3 Non-Overlapping Subarrays", () => {
  it("maxSumOfThreeSubarrays should return [0,3,5] for nums = [1,2,1,2,6,7,5,1], k = 2", () => {
    const nums = [1, 2, 1, 2, 6, 7, 5, 1];
    const k = 2;
    const result = maxSumOfThreeSubarrays(nums, k);
    expect(result).toEqual([0, 3, 5]);
  });

  it("maxSumOfThreeSubarrays should return [0,2,4] for nums = [1,2,1,2,1,2,1,2,1], k = 2", () => {
    const nums = [1, 2, 1, 2, 1, 2, 1, 2, 1];
    const k = 2;
    const result = maxSumOfThreeSubarrays(nums, k);
    expect(result).toEqual([0, 2, 4]);
  });
});
