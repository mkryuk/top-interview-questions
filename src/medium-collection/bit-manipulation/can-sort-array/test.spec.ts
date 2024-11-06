import { canSortArray } from "./solution";

describe("Find if Array Can Be Sorted", () => {
  it("canSortArray should return true for nums = [8,4,2,30,15]", () => {
    const nums = [8, 4, 2, 30, 15];
    const result = canSortArray(nums);
    expect(result).toBeTrue();
  });

  it("canSortArray should return true for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = canSortArray(nums);
    expect(result).toBeTrue();
  });

  it("canSortArray should return false for nums = [3,16,8,4,2]", () => {
    const nums = [3, 16, 8, 4, 2];
    const result = canSortArray(nums);
    expect(result).toBeFalse();
  });
});
