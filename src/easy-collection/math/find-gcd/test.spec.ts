import { findGCD } from "./solution";

describe("1979. Find Greatest Common Divisor of Array:", () => {
  it("findGCD should return 2 for nums = [2,5,6,9,10]", () => {
    const nums = [2, 5, 6, 9, 10];
    const result = findGCD(nums);
    expect(result).toEqual(2);
  });

  it("findGCD should return 1 for nums = [7,5,6,8,3]", () => {
    const nums = [7, 5, 6, 8, 3];
    const result = findGCD(nums);
    expect(result).toEqual(1);
  });

  it("findGCD should return 3 for nums = [3,3]", () => {
    const nums = [3, 3];
    const result = findGCD(nums);
    expect(result).toEqual(3);
  });
});
