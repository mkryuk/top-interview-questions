import { minimumDifference } from "./solution";

describe("1984. Minimum Difference Between Highest and Lowest of K Scores", () => {
  it("minimumDifference should return 0 for nums = [90], k = 1", () => {
    const nums = [90];
    const k = 1;
    const result = minimumDifference(nums, k);
    expect(result).toEqual(0);
  });

  it("minimumDifference should return 2 for nums = [9,4,1,7], k = 2", () => {
    const nums = [9, 4, 1, 7];
    const k = 2;
    const result = minimumDifference(nums, k);
    expect(result).toEqual(2);
  });
});
