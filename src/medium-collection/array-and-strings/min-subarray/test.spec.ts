import { minSubarray } from "./solution";

describe("1590. Make Sum Divisible by P", () => {
  it("minSubarray should return 1 for nums = [3,1,4,2], p = 6", () => {
    const nums = [3, 1, 4, 2];
    const p = 6;
    const result = minSubarray(nums, p);
    expect(result).toEqual(1);
  });

  it("minSubarray should return 2 for nums = [6,3,5,2], p = 9", () => {
    const nums = [6, 3, 5, 2];
    const p = 9;
    const result = minSubarray(nums, p);
    expect(result).toEqual(2);
  });

  it("minSubarray should return 0 for nums = [1,2,3], p = 3", () => {
    const nums = [1, 2, 3];
    const p = 3;
    const result = minSubarray(nums, p);
    expect(result).toEqual(0);
  });
});
