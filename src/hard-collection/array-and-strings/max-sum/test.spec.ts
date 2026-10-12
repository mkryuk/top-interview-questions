import { maxSum } from "./solution";

describe("2897. Apply Operations on Array to Maximize Sum of Squares:", () => {
  it("maxSum should return 261 for nums = [2,6,5,8], k = 2", () => {
    const nums = [2, 6, 5, 8];
    const k = 2;
    const result = maxSum(nums, k);
    expect(result).toEqual(261);
  });

  it("maxSum should return 90 for nums = [4,5,4,7], k = 3", () => {
    const nums = [4, 5, 4, 7];
    const k = 3;
    const result = maxSum(nums, k);
    expect(result).toEqual(90);
  });
});
