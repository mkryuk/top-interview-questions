import { canPartitionKSubsets } from "./solution";

describe("Partition to K Equal Sum Subsets:", () => {
  it("canPartitionKSubsets should return true for nums = [4,3,2,3,5,2,1], k = 4", () => {
    const nums = [4, 3, 2, 3, 5, 2, 1];
    const k = 4;
    const result = canPartitionKSubsets(nums, k);
    expect(result).toBeTrue();
  });

  it("canPartitionKSubsets should return false for nums = [1,2,3,4], k = 3", () => {
    const nums = [1, 2, 3, 4];
    const k = 3;
    const result = canPartitionKSubsets(nums, k);
    expect(result).toBeFalse();
  });

  it("canPartitionKSubsets should return false for nums = [3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269], k = 5", () => {
    const nums = [3522, 181, 521, 515, 304, 123, 2512, 312, 922, 407, 146, 1932, 4037, 2646, 3871, 269];
    const k = 5;
    const result = canPartitionKSubsets(nums, k);
    expect(result).toBeTrue();
  });

  it("canPartitionKSubsets should return false for nums = [1,3,1,1,2,1], k = 3", () => {
    const nums = [1, 3, 1, 1, 2, 1];
    const k = 3;
    const result = canPartitionKSubsets(nums, k);
    expect(result).toBeTrue();
  });
});
