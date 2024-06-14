import { minIncrementForUnique } from "./solution";

describe("Minimum Increment to Make Array Unique", () => {
  it("minIncrementForUnique should return 1 nums = [1,2,2]", () => {
    const nums = [1, 2, 2];
    const result = minIncrementForUnique(nums);
    expect(result).toEqual(1);
  });

  it("minIncrementForUnique should return 6 nums = [3,2,1,2,1,7]", () => {
    const nums = [3, 2, 1, 2, 1, 7];
    const result = minIncrementForUnique(nums);
    expect(result).toEqual(6);
  });
});
