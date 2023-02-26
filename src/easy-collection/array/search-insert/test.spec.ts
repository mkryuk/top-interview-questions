import { searchInsert } from "./solution";

describe("Search Insert Position", () => {
  it("searchInsert should return 2 fot nums = [1,3,5,6], target = 5", () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const result = searchInsert(nums, target);
    expect(result).toEqual(2);
  });

  it("searchInsert should return 1 fot nums = [1,3,5,6], target = 2", () => {
    const nums = [1, 3, 5, 6];
    const target = 1;
    const result = searchInsert(nums, target);
    expect(result).toEqual(1);
  });

  it("searchInsert should return 4 fot nums = [1,3,5,6], target = 7", () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const result = searchInsert(nums, target);
    expect(result).toEqual(4);
  });

  it("searchInsert should return 2 fot nums = [1,2,4,5,6,7], target = 3", () => {
    const nums = [1, 2, 4, 5, 6, 7];
    const target = 3;
    const result = searchInsert(nums, target);
    expect(result).toEqual(2);
  });
});
