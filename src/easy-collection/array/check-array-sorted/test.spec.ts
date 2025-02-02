import { check } from "./solution";

describe("Check if Array Is Sorted and Rotated", () => {
  it("check should return true for nums = [3,4,5,1,2]", () => {
    const nums = [3, 4, 5, 1, 2];
    const result = check(nums);
    expect(result).toBeTrue();
  });

  it("check should return false for nums = [2,1,3,4]", () => {
    const nums = [2, 1, 3, 4];
    const result = check(nums);
    expect(result).toBeFalse();
  });

  it("check should return true for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = check(nums);
    expect(result).toBeTrue();
  });

  it("check should return true for nums = [6,10,6]", () => {
    const nums = [6, 10, 6];
    const result = check(nums);
    expect(result).toBeTrue();
  });
});
