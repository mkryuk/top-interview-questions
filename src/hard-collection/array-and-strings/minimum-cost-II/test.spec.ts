import { minimumCost } from "./solution";

describe("3013. Divide an Array Into Subarrays With Minimum Cost II", () => {
  it("minimumCost should return 5 for nums = [1,3,2,6,4,2], k = 3, dist = 3", () => {
    const nums = [1, 3, 2, 6, 4, 2];
    const k = 3;
    const dist = 3;
    const result = minimumCost(nums, k, dist);
    expect(result).toEqual(5);
  });

  it("minimumCost should return 15 for nums = [10,1,2,2,2,1], k = 4, dist = 3", () => {
    const nums = [10, 1, 2, 2, 2, 1];
    const k = 4;
    const dist = 3;
    const result = minimumCost(nums, k, dist);
    expect(result).toEqual(15);
  });

  it("minimumCost should return 36 for nums = [10,8,18,9], k = 3, dist = 1", () => {
    const nums = [10, 8, 18, 9];
    const k = 3;
    const dist = 1;
    const result = minimumCost(nums, k, dist);
    expect(result).toEqual(36);
  });
});
