import { checkSubarraySum } from "./solution";

describe("Continuous Subarray Sum", () => {
  it("checkSubarraySum should return true for nums = [23,2,4,6,7], k = 6", () => {
    const nums = [23, 2, 4, 6, 7];
    const k = 6;
    const result = checkSubarraySum(nums, k);
    expect(result).toBeTrue();
  });

  it("checkSubarraySum should return true for nums = [23,2,6,4,7], k = 6", () => {
    const nums = [23, 2, 6, 4, 7];
    const k = 6;
    const result = checkSubarraySum(nums, k);
    expect(result).toBeTrue();
  });

  it("checkSubarraySum should return false for nums = [23,2,6,4,7], k = 13", () => {
    const nums = [23, 2, 6, 4, 7];
    const k = 13;
    const result = checkSubarraySum(nums, k);
    expect(result).toBeFalse();
  });

  it("checkSubarraySum should return false for nums = [23,2,4,6,6], k = 7", () => {
    const nums = [23, 2, 4, 6, 6];
    const k = 7;
    const result = checkSubarraySum(nums, k);
    expect(result).toBeTrue();
  });
});
