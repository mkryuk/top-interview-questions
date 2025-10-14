import { hasIncreasingSubarrays } from "./solution";

describe("3349. Adjacent Increasing Subarrays Detection I", () => {
  it("hasIncreasingSubarrays should return true for nums = [2,5,7,8,9,2,3,4,3,1], k = 3", () => {
    const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
    const k = 3;
    const result = hasIncreasingSubarrays(nums, k);
    expect(result).toBeTrue();
  });

  it("hasIncreasingSubarrays should return false for nums = [1,2,3,4,4,4,4,5,6,7], k = 5", () => {
    const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
    const k = 5;
    const result = hasIncreasingSubarrays(nums, k);
    expect(result).toBeTrue();
  });
});
