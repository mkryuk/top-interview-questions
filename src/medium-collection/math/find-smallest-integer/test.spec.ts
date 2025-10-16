import { findSmallestInteger } from "./solution";

describe("2598. Smallest Missing Non-negative Integer After Operations", () => {
  it("findSmallestInteger should return 4 for nums = [1,-10,7,13,6,8], value = 5", () => {
    const nums = [1, -10, 7, 13, 6, 8];
    const value = 5;
    const result = findSmallestInteger(nums, value);
    expect(result).toEqual(4);
  });

  it("findSmallestInteger should return 2 for nums = [1,-10,7,13,6,8], value = 7", () => {
    const nums = [1, -10, 7, 13, 6, 8];
    const value = 7;
    const result = findSmallestInteger(nums, value);
    expect(result).toEqual(2);
  });
});
