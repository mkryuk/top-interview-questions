import { longestSubarray } from "./solution";

describe("Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", () => {
  it("longestSubarray should return 2 for nums = [8,2,4,7], limit = 4", () => {
    const nums = [8, 2, 4, 7];
    const limit = 4;
    const result = longestSubarray(nums, limit);
    expect(result).toEqual(2);
  });

  it("longestSubarray should return 4 for nums = [10,1,2,4,7,2], limit = 5", () => {
    const nums = [10, 1, 2, 4, 7, 2];
    const limit = 5;
    const result = longestSubarray(nums, limit);
    expect(result).toEqual(4);
  });

  it("longestSubarray should return 3 for nums = [4,2,2,2,4,4,2,2], limit = 0", () => {
    const nums = [4, 2, 2, 2, 4, 4, 2, 2];
    const limit = 0;
    const result = longestSubarray(nums, limit);
    expect(result).toEqual(3);
  });
});
