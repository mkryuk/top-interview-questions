import { countFairPairs } from "./solution";

describe("Count the Number of Fair Pairs", () => {
  it("countFairPairs should return 6 for nums = [0,1,7,4,4,5], lower = 3, upper = 6", () => {
    const nums = [0, 1, 7, 4, 4, 5];
    const lower = 3;
    const upper = 6;
    const result = countFairPairs(nums, lower, upper);
    expect(result).toEqual(6);
  });

  it("countFairPairs should return 1 for nums = [1,7,9,2,5], lower = 11, upper = 11", () => {
    const nums = [1, 7, 9, 2, 5];
    const lower = 11;
    const upper = 11;
    const result = countFairPairs(nums, lower, upper);
    expect(result).toEqual(1);
  });
});
