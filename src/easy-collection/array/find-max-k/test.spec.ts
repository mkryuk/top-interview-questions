import { findMaxK } from "./solution";

describe("Largest Positive Integer That Exists With Its Negative", () => {
  it("findMaxK should return 3 for nums = [-1,2,-3,3]", () => {
    const nums = [-1, 2, -3, 3];
    const result = findMaxK(nums);
    expect(result).toEqual(3);
  });

  it("findMaxK should return 7 for nums = [-1,10,6,7,-7,1]", () => {
    const nums = [-1, 10, 6, 7, -7, 1];
    const result = findMaxK(nums);
    expect(result).toEqual(7);
  });

  it("findMaxK should return -1 for nums = [-10,8,6,7,-2,-3]", () => {
    const nums = [-10, 8, 6, 7, -2, -3];
    const result = findMaxK(nums);
    expect(result).toEqual(-1);
  });
});
