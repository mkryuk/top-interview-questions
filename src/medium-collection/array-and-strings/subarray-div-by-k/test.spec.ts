import { subarraysDivByK } from "./solution";

describe("Subarray Sums Divisible by K", () => {
  it("subarraysDivByK should return 7 for nums = [4,5,0,-2,-3,1], k = 5", () => {
    const nums = [4, 5, 0, -2, -3, 1];
    const k = 5;
    const result = subarraysDivByK(nums, k);
    expect(result).toEqual(7);
  });

  it("subarraysDivByK should return 0 for nums = [5], k = 9", () => {
    const nums = [5];
    const k = 9;
    const result = subarraysDivByK(nums, k);
    expect(result).toEqual(0);
  });
});
