import { smallestRangeI } from "./solution";

describe("Smallest Range I", () => {
  it("smallestRangeI should return 0 for nums = [1], k = 0", () => {
    const nums = [1];
    const k = 0;
    const result = smallestRangeI(nums, k);
    expect(result).toEqual(0);
  });

  it("smallestRangeI should return 6 for nums = [0,10], k = 2", () => {
    const nums = [0, 10];
    const k = 2;
    const result = smallestRangeI(nums, k);
    expect(result).toEqual(6);
  });

  it("smallestRangeI should return 0 for nums = [1,3,6], k = 3", () => {
    const nums = [1, 3, 6];
    const k = 3;
    const result = smallestRangeI(nums, k);
    expect(result).toEqual(0);
  });

  it("smallestRangeI should return 0 for nums = [9,9,2,8,7], k = 4", () => {
    const nums = [9, 9, 2, 8, 7];
    const k = 4;
    const result = smallestRangeI(nums, k);
    expect(result).toEqual(0);
  });
});
