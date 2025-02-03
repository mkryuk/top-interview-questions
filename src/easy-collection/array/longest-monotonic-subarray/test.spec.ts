import { longestMonotonicSubarray } from "./solution";

describe("Longest Strictly Increasing or Strictly Decreasing Subarray", () => {
  it("longestMonotonicSubarray should return 2 for nums = [1,4,3,3,2]", () => {
    const nums = [1, 4, 3, 3, 2];
    const result = longestMonotonicSubarray(nums);
    expect(result).toBe(2);
  });

  it("longestMonotonicSubarray should return 1 for nums = [3,3,3,3]", () => {
    const nums = [3, 3, 3, 3];
    const result = longestMonotonicSubarray(nums);
    expect(result).toBe(1);
  });

  it("longestMonotonicSubarray should return 3 for nums = [3,2,1]", () => {
    const nums = [3, 2, 1];
    const result = longestMonotonicSubarray(nums);
    expect(result).toBe(3);
  });
});
