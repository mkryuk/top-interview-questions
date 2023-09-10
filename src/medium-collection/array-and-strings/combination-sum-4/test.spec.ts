import { combinationSum4 } from "./solution";

describe("Combination Sum IV:", () => {
  it("combinationSum4 should return 7 for nums = [1,2,3], target = 4", () => {
    const nums = [1, 2, 3];
    const target = 4;
    const result = combinationSum4(nums, target);
    expect(result).toEqual(7);
  });

  it("combinationSum4 should return 0 for nums = [9], target = 3", () => {
    const nums = [9];
    const target = 3;
    const result = combinationSum4(nums, target);
    expect(result).toEqual(0);
  });

  it("combinationSum4 should return 0 for nums = [4,2,1], target = 32", () => {
    const nums = [4, 2, 1];
    const target = 32;
    const result = combinationSum4(nums, target);
    expect(result).toEqual(39882198);
  });
});
