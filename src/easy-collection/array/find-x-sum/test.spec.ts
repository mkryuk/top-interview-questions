import { findXSum } from "./solution";

describe("3318. Find X-Sum of All K-Long Subarrays I", () => {
  it("findXSum should return [6,10,12] for nums = [1,1,2,2,3,4,2,3], k = 6, x = 2", () => {
    const nums = [1, 1, 2, 2, 3, 4, 2, 3];
    const k = 6;
    const x = 2;
    const result = findXSum(nums, k, x);
    expect(result).toEqual([6, 10, 12]);
  });

  it("findXSum should return [11,15,15,15,12] for nums = [3,8,7,8,7,5], k = 2, x = 2", () => {
    const nums = [3, 8, 7, 8, 7, 5];
    const k = 2;
    const x = 2;
    const result = findXSum(nums, k, x);
    expect(result).toEqual([11, 15, 15, 15, 12]);
  });
});
