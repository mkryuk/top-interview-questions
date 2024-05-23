import { beautifulSubsets } from "./solution";

describe("The Number of Beautiful Subsets", () => {
  it("beautifulSubsets should return 4 for nums = [2,4,6], k = 2", () => {
    const nums = [2, 4, 6];
    const k = 2;
    const result = beautifulSubsets(nums, k);
    expect(result).toEqual(4);
  });

  it("beautifulSubsets should return 1 for nums = [1], k = 1", () => {
    const nums = [1];
    const k = 1;
    const result = beautifulSubsets(nums, k);
    expect(result).toEqual(1);
  });

  it("beautifulSubsets should return 23 for nums = [10,4,5,7,2,1], k = 3", () => {
    const nums = [10, 4, 5, 7, 2, 1];
    const k = 3;
    const result = beautifulSubsets(nums, k);
    expect(result).toEqual(23);
  });
});
