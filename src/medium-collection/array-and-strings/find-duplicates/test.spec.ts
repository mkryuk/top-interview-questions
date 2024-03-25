import { findDuplicates } from "./solution";

describe("Find All Duplicates in an Array", () => {
  it("findDuplicates should return [2,3] for nums = [4,3,2,7,8,2,3,1]", () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findDuplicates(nums);
    expect(result).toEqual([2, 3]);
  });

  it("findDuplicates should return [1] for nums = [1,1,2]", () => {
    const nums = [1, 1, 2];
    const result = findDuplicates(nums);
    expect(result).toEqual([1]);
  });

  it("findDuplicates should return [] for nums = [1]", () => {
    const nums = [1];
    const result = findDuplicates(nums);
    expect(result).toEqual([]);
  });
});
