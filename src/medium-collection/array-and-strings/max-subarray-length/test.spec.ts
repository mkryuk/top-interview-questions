import { maxSubarrayLength } from "./solution";

describe("Length of Longest Subarray With at Most K Frequency", () => {
  it("maxSubarrayLength should return 6 for nums = [1,2,3,1,2,3,1,2], k = 2", () => {
    const nums = [1, 2, 3, 1, 2, 3, 1, 2];
    const k = 2;
    const result = maxSubarrayLength(nums, k);
    expect(result).toEqual(6);
  });

  it("maxSubarrayLength should return 2 for nums = [1,2,1,2,1,2,1,2], k = 1", () => {
    const nums = [1, 2, 1, 2, 1, 2, 1, 2];
    const k = 1;
    const result = maxSubarrayLength(nums, k);
    expect(result).toEqual(2);
  });

  it("maxSubarrayLength should return 4 for nums = [5,5,5,5,5,5,5], k = 4", () => {
    const nums = [5, 5, 5, 5, 5, 5, 5];
    const k = 4;
    const result = maxSubarrayLength(nums, k);
    expect(result).toEqual(4);
  });
});
