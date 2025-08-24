import { longestSubarray } from "./solution";

describe("1493. Longest Subarray of 1's After Deleting One Element", () => {
  it("longestSubarray should return 3 for nums = [1,1,0,1]", () => {
    const nums = [1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(3);
  });

  it("longestSubarray should return 5 for nums = [0,1,1,1,0,1,1,0,1]", () => {
    const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(5);
  });

  it("longestSubarray should return 2 for nums = [1,1,1]", () => {
    const nums = [1, 1, 1];
    const result = longestSubarray(nums);
    expect(result).toEqual(2);
  });
});
