import { minimumCost } from "./solution-optimized";

describe("3010. Divide an Array Into Subarrays With Minimum Cost I", () => {
  it("minimumCost should return 6 for nums = [1,2,3,12]", () => {
    const nums = [1, 2, 3, 12];
    const result = minimumCost(nums);
    expect(result).toEqual(6);
  });

  it("minimumCost should return 12 for nums = [5,4,3]", () => {
    const nums = [5, 4, 3];
    const result = minimumCost(nums);
    expect(result).toEqual(12);
  });

  it("minimumCost should return 12 for nums = [10,3,1,1]", () => {
    const nums = [10, 3, 1, 1];
    const result = minimumCost(nums);
    expect(result).toEqual(12);
  });
});
