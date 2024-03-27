import { numSubarrayProductLessThanK } from "./solution";

describe("Subarray Product Less Than K", () => {
  it("numSubarrayProductLessThanK should return 8 for nums = [10,5,2,6], k = 100", () => {
    const nums = [10, 5, 2, 6];
    const k = 100;
    const result = numSubarrayProductLessThanK(nums, k);
    expect(result).toEqual(8);
  });

  it("numSubarrayProductLessThanK should return 0 for nums = [1,2,3], k = 0", () => {
    const nums = [1, 2, 3];
    const k = 0;
    const result = numSubarrayProductLessThanK(nums, k);
    expect(result).toEqual(0);
  });
});
