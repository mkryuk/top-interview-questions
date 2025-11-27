import { maxSubarraySum } from "./solution";

describe("3381. Maximum Subarray Sum With Length Divisible by K", () => {
  it("maxSubarraySum should return 3 for nums = [1,2], k = 1", () => {
    const nums = [1, 2];
    const k = 1;
    const result = maxSubarraySum(nums, k);
    expect(result).toEqual(3);
  });

  it("maxSubarraySum should return -10 for nums = [-1,-2,-3,-4,-5], k = 4", () => {
    const nums = [-1, -2, -3, -4, -5];
    const k = 4;
    const result = maxSubarraySum(nums, k);
    expect(result).toEqual(-10);
  });

  it("maxSubarraySum should return 4 for nums = [-5,1,2,-3,4], k = 2", () => {
    const nums = [-5, 1, 2, -3, 4];
    const k = 2;
    const result = maxSubarraySum(nums, k);
    expect(result).toEqual(4);
  });
});
