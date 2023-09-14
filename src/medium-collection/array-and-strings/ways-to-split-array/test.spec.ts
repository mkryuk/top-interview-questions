import { waysToSplitArray } from "./solution";

describe("Number of Ways to Split Array:", () => {
  it("waysToSplitArray should return 2 for nums = [10,4,-8,7]", () => {
    const nums = [10, 4, -8, 7];
    const result = waysToSplitArray(nums);
    expect(result).toEqual(2);
  });

  it("waysToSplitArray should return 2 for nums = [2,3,1,0]", () => {
    const nums = [2, 3, 1, 0];
    const result = waysToSplitArray(nums);
    expect(result).toEqual(2);
  });

  it("waysToSplitArray should return 0 for nums = [-2,-1]", () => {
    const nums = [-2, -1];
    const result = waysToSplitArray(nums);
    expect(result).toEqual(0);
  });
});
