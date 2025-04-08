import { canPartition } from "./solution-backtrack";

describe("Partition Equal Subset Sum", () => {
  it("canPartition should return true for nums = [1,5,11,5]", () => {
    const nums = [1, 5, 11, 5];
    const result = canPartition(nums);
    expect(result).toBeTrue();
  });

  it("canPartition should return false for nums = [1,2,3,5]", () => {
    const nums = [1, 2, 3, 5];
    const result = canPartition(nums);
    expect(result).toBeFalse();
  });

  it("canPartition should return false for nums = [1,2,5]", () => {
    const nums = [1, 2, 5];
    const result = canPartition(nums);
    expect(result).toBeFalse();
  });

  it("canPartition should return true for nums = [1, 2, 3, 4, 5, 6, 7]", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const result = canPartition(nums);
    expect(result).toBeTrue();
  });
});
