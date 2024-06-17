import { judgeSquareSum } from "./solution";

describe("Sum of Square Numbers", () => {
  it("judgeSquareSum should return true for c = 5", () => {
    const c = 5;
    const result = judgeSquareSum(c);
    expect(result).toBeTrue();
  });

  it("judgeSquareSum should return false for c = 3", () => {
    const c = 3;
    const result = judgeSquareSum(c);
    expect(result).toBeFalse();
  });
});
