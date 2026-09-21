import { resultArray } from "./solution";

describe("3524. Find X Value of Array I:", () => {
  it("resultArray should return [9,2,4] for nums = [1,2,3,4,5], k = 3", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 3;
    const result = resultArray(nums, k);
    expect(result).toEqual([9, 2, 4]);
  });

  it("resultArray should return [18,1,2,0] for nums = [1,2,4,8,16,32], k = 4", () => {
    const nums = [1, 2, 4, 8, 16, 32];
    const k = 4;
    const result = resultArray(nums, k);
    expect(result).toEqual([18, 1, 2, 0]);
  });

  it("resultArray should return [9,6] for nums = [1,1,2,1,1], k = 2", () => {
    const nums = [1, 1, 2, 1, 1];
    const k = 2;
    const result = resultArray(nums, k);
    expect(result).toEqual([9, 6]);
  });
});
