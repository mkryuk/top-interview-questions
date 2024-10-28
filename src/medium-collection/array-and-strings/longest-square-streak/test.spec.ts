import { longestSquareStreak } from "./solution";

describe("Longest Square Streak in an Array", () => {
  it("longestSquareStreak should return 3 for nums = [4,3,6,16,8,2]", () => {
    const nums = [4, 3, 6, 16, 8, 2];
    const result = longestSquareStreak(nums);
    expect(result).toEqual(3);
  });

  it("longestSquareStreak should return -1 for nums = [2,3,5,6,7]", () => {
    const nums = [2, 3, 5, 6, 7];
    const result = longestSquareStreak(nums);
    expect(result).toEqual(-1);
  });
});
