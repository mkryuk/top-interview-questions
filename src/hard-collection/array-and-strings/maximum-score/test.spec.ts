import { maximumScore } from "./solution";

describe("Apply Operations to Maximize Score", () => {
  it("maximumScore should return 81 for nums = [8,3,9,3,8], k = 2", () => {
    const nums = [8, 3, 9, 3, 8];
    const k = 2;
    const result = maximumScore(nums, k);
    expect(result).toEqual(81);
  });

  it("maximumScore should return 4788 for nums = [19,12,14,6,10,18], k = 3", () => {
    const nums = [19, 12, 14, 6, 10, 18];
    const k = 3;
    const result = maximumScore(nums, k);
    expect(result).toEqual(4788);
  });
});
