import { sumFourDivisors } from "./solution";

describe("1390. Four Divisors", () => {
  it("sumFourDivisors should return 32 for nums = [21,4,7]", () => {
    const nums = [21, 4, 7];
    const result = sumFourDivisors(nums);
    expect(result).toEqual(32);
  });

  it("sumFourDivisors should return 64 for nums = [21,21]", () => {
    const nums = [21, 21];
    const result = sumFourDivisors(nums);
    expect(result).toEqual(64);
  });

  it("sumFourDivisors should return 0 for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = sumFourDivisors(nums);
    expect(result).toEqual(0);
  });
});
