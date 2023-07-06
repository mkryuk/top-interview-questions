import { minSubArrayLen } from "./solution";

describe("Minimum Size Subarray Sum:", () => {
  it("minSubArrayLen should return 2 for target = 7, nums = [2,3,1,2,4,3]", () => {
    const target = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(2);
  });

  it("minSubArrayLen should return 1 for target = 4, nums = [1,4,4]", () => {
    const target = 4;
    const nums = [1, 4, 4];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(1);
  });

  it("minSubArrayLen should return 0 for target = 11, nums = [1,1,1,1,1,1,1,1]", () => {
    const target = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    const result = minSubArrayLen(target, nums);
    expect(result).toEqual(0);
  });
});
