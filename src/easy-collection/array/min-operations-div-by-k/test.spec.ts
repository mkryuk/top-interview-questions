import { minOperations } from "./solution";

describe("3512. Minimum Operations to Make Array Sum Divisible by K", () => {
  it("minOperations should return 4 for nums = [3,9,7], k = 5", () => {
    const nums = [3, 9, 7];
    const k = 5;
    const result = minOperations(nums, k);
    expect(result).toEqual(4);
  });

  it("minOperations should return 0 for nums = [4,1,3], k = 4", () => {
    const nums = [4, 1, 3];
    const k = 4;
    const result = minOperations(nums, k);
    expect(result).toEqual(0);
  });

  it("minOperations should return 5 for nums = [3,2], k = 6", () => {
    const nums = [3, 2];
    const k = 6;
    const result = minOperations(nums, k);
    expect(result).toEqual(5);
  });
});
