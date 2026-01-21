import { minBitwiseArray } from "./solution";

describe("3315. Construct the Minimum Bitwise Array II", () => {
  it("minBitwiseArray should return [-1,1,4,3] for nums = [2,3,5,7]", () => {
    const nums = [2, 3, 5, 7];
    const result = minBitwiseArray(nums);
    expect(result).toEqual([-1, 1, 4, 3]);
  });

  it("minBitwiseArray should return [9,12,15] for nums = [11,13,31]", () => {
    const nums = [11, 13, 31];
    const result = minBitwiseArray(nums);
    expect(result).toEqual([9, 12, 15]);
  });
});
