import { countPartitions } from "./solution";

describe("3578. Count Partitions With Max-Min Difference at Most K", () => {
  it("countPartitions should return 6 for nums = [9,4,1,3,7], k = 4", () => {
    const nums = [9, 4, 1, 3, 7];
    const k = 4;
    const result = countPartitions(nums, k);
    expect(result).toEqual(6);
  });

  it("countPartitions should return 2 for nums = [3,3,4], k = 0", () => {
    const nums = [3, 3, 4];
    const k = 0;
    const result = countPartitions(nums, k);
    expect(result).toEqual(2);
  });
});
