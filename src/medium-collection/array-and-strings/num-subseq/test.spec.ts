import { numSubseq } from "./solution";

describe("1498. Number of Subsequences That Satisfy the Given Sum Condition", () => {
  it("numSubseq should return 4 for nums = [3,5,6,7], target = 9", () => {
    const nums = [3, 5, 6, 7];
    const target = 9;
    const result = numSubseq(nums, target);
    expect(result).toEqual(4);
  });

  it("numSubseq should return 6 for nums = [3,3,6,8], target = 10", () => {
    const nums = [3, 3, 6, 8];
    const target = 10;
    const result = numSubseq(nums, target);
    expect(result).toEqual(6);
  });

  it("numSubseq should return 61 for nums = [2,3,3,4,6,7], target = 12", () => {
    const nums = [2, 3, 3, 4, 6, 7];
    const target = 12;
    const result = numSubseq(nums, target);
    expect(result).toEqual(61);
  });
});
