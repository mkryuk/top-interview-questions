import { maximumLength } from "./solution";

describe("3202. Find the Maximum Length of Valid Subsequence II", () => {
  it("maximumLength should return 5 for nums = [1,2,3,4,5], k = 2", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 2;
    const result = maximumLength(nums, k);
    expect(result).toEqual(5);
  });

  it("maximumLength should return 4 for nums = [1,4,2,3,1,4], k = 3", () => {
    const nums = [1, 4, 2, 3, 1, 4];
    const k = 3;
    const result = maximumLength(nums, k);
    expect(result).toEqual(4);
  });
});
