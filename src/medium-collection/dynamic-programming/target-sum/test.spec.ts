import { findTargetSumWays } from "./solution";

describe("Target Sum", () => {
  it("findTargetSumWays should return 5 for nums = [1,1,1,1,1], target = 3", () => {
    const nums = [1, 1, 1, 1, 1];
    const target = 3;
    const result = findTargetSumWays(nums, target);
    expect(result).toEqual(5);
  });

  it("findTargetSumWays should return 1 for nums = [1], target = 1", () => {
    const nums = [1];
    const target = 1;
    const result = findTargetSumWays(nums, target);
    expect(result).toEqual(1);
  });
});
