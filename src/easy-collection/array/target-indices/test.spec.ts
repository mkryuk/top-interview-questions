import { targetIndices } from "./solution";

describe("Find Target Indices After Sorting Array:", () => {
  it("targetIndices should return [1,2] for nums = [1,2,5,2,3], target = 2", () => {
    const nums = [1, 2, 5, 2, 3];
    const target = 2;
    const result = targetIndices(nums, target);
    expect(result).toEqual([1, 2]);
  });

  it("targetIndices should return [3] for nums = [1,2,5,2,3], target = 3", () => {
    const nums = [1, 2, 5, 2, 3];
    const target = 3;
    const result = targetIndices(nums, target);
    expect(result).toEqual([3]);
  });

  it("targetIndices should return [4] for nums = [1,2,5,2,3], target = 5", () => {
    const nums = [1, 2, 5, 2, 3];
    const target = 5;
    const result = targetIndices(nums, target);
    expect(result).toEqual([4]);
  });
});
