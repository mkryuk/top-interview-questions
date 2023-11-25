import { getSumAbsoluteDifferences } from "./solution";

describe("Sum of Absolute Differences in a Sorted Array:", () => {
  it("getSumAbsoluteDifferences should return [4,3,5] for nums = [2,3,5]", () => {
    const nums = [2, 3, 5];
    const result = getSumAbsoluteDifferences(nums);
    expect(result).toEqual([4, 3, 5]);
  });

  it("getSumAbsoluteDifferences should return [24,15,13,15,21] for nums = [1,4,6,8,10]", () => {
    const nums = [1, 4, 6, 8, 10];
    const result = getSumAbsoluteDifferences(nums);
    expect(result).toEqual([24, 15, 13, 15, 21]);
  });
});
