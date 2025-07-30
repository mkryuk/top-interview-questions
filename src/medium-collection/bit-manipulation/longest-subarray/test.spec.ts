import { longestSubarray } from "./solution";

describe("2419. Longest Subarray With Maximum Bitwise AND", () => {
  it("longestSubarray should return 2 for nums = [1,2,3,3,2,2]", () => {
    const nums = [1, 2, 3, 3, 2, 2];
    const result = longestSubarray(nums);
    expect(result).toEqual(2);
  });

  it("longestSubarray should return 1 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = longestSubarray(nums);
    expect(result).toEqual(1);
  });
});
