import { threeConsecutiveOdds } from "./solution";

describe("Three Consecutive Odds", () => {
  it("threeConsecutiveOdds should return false for arr = [2,6,4,1]", () => {
    const arr = [2, 6, 4, 1];
    const result = threeConsecutiveOdds(arr);
    expect(result).toBeFalse();
  });

  it("threeConsecutiveOdds should return true for arr = [1,2,34,3,4,5,7,23,12]", () => {
    const arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
    const result = threeConsecutiveOdds(arr);
    expect(result).toBeTrue();
  });
});
