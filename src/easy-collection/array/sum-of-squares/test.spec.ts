import { sumOfSquares } from "./solution";

describe("2778. Sum of Squares of Special Elements:", () => {
  it("sumOfSquares should return 21 for nums = [1,2,3,4]", () => {
    const nums = [1, 2, 3, 4];
    const result = sumOfSquares(nums);
    expect(result).toBe(21);
  });

  it("sumOfSquares should return 63 for nums = [2,7,1,19,18,3]", () => {
    const nums = [2, 7, 1, 19, 18, 3];
    const result = sumOfSquares(nums);
    expect(result).toBe(63);
  });
});
