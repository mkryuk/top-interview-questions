import { largestDivisibleSubset } from "./solution";

describe("Largest Divisible Subset:", () => {
  it("largestDivisibleSubset should return [1,2] for nums = [1,2,3]", () => {
    const nums = [1, 2, 3];
    const result = largestDivisibleSubset(nums);
    expect(result).toEqual([1, 2]);
  });

  it("largestDivisibleSubset should return [1,2,4,8] for nums = [1,2,4,8]", () => {
    const nums = [1, 2, 4, 8];
    const result = largestDivisibleSubset(nums);
    expect(result).toEqual([1, 2, 4, 8]);
  });

  it("largestDivisibleSubset should return [4,8,16] for nums = [3,4,16,8]", () => {
    const nums = [3, 4, 16, 8];
    const result = largestDivisibleSubset(nums);
    expect(result).toEqual([4, 8, 16]);
  });
});
