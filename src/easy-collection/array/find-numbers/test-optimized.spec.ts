import { findNumbers } from "./solution-optimized";

describe("Find Numbers with Even Number of Digits", () => {
  it("findNumbers should return 2 for nums = [12,345,2,6,7896]", () => {
    const nums = [12, 345, 2, 6, 7896];
    const result = findNumbers(nums);
    expect(result).toEqual(2);
  });

  it("findNumbers should return 1 for nums = [555,901,482,1771]", () => {
    const nums = [555, 901, 482, 1771];
    const result = findNumbers(nums);
    expect(result).toEqual(1);
  });
});
