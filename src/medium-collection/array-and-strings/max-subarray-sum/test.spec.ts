import { maximumSubarraySum } from "./solution";

describe("Maximum Sum of Distinct Subarrays With Length K", () => {
  it("maximumSubarraySum should return 15 for nums = [1,5,4,2,9,9,9], k = 3", () => {
    const nums = [1, 5, 4, 2, 9, 9, 9];
    const k = 3;
    const result = maximumSubarraySum(nums, k);
    expect(result).toEqual(15);
  });

  it("maximumSubarraySum should return 0 for nums = [4,4,4], k = 3", () => {
    const nums = [4, 4, 4];
    const k = 3;
    const result = maximumSubarraySum(nums, k);
    expect(result).toEqual(15);
  });
});
