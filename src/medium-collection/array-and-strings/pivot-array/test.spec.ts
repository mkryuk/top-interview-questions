import { pivotArray } from "./solution";

describe("Partition Array According to Given Pivot", () => {
  it("pivotArray should return [9,5,3,10,10,12,14] for nums = [9,12,5,10,14,3,10], pivot = 10", () => {
    const nums = [9, 12, 5, 10, 14, 3, 10];
    const pivot = 10;
    const result = pivotArray(nums, pivot);
    expect(result).toEqual([9, 5, 3, 10, 10, 12, 14]);
  });

  it("pivotArray should return [-3,2,4,3] for nums = [-3,4,3,2], pivot = 2", () => {
    const nums = [-3, 4, 3, 2];
    const pivot = 2;
    const result = pivotArray(nums, pivot);
    expect(result).toEqual([-3, 2, 4, 3]);
  });
});
