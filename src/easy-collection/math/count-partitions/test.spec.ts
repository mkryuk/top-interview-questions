import { countPartitions } from "./solution";

describe("3432. Count Partitions with Even Sum Difference", () => {
  it("countPartitions should return 4 for nums = [10,10,3,7,6]", () => {
    const nums = [10, 10, 3, 7, 6];
    const result = countPartitions(nums);
    expect(result).toEqual(4);
  });

  it("countPartitions should return 0 for nums = [1,2,2]", () => {
    const nums = [1, 2, 2];
    const result = countPartitions(nums);
    expect(result).toEqual(0);
  });

  it("countPartitions should return 3 for nums = [2,4,6,8]", () => {
    const nums = [2, 4, 6, 8];
    const result = countPartitions(nums);
    expect(result).toEqual(3);
  });
});
