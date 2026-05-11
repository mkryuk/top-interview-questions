import { separateDigits } from "./solution";

describe("2553. Separate the Digits in an Array:", () => {
  it("separateDigits should return [1,3,2,5,8,3,7,7] for nums = [13,25,83,77]", () => {
    const nums = [13, 25, 83, 77];
    const result = separateDigits(nums);
    expect(result).toEqual([1, 3, 2, 5, 8, 3, 7, 7]);
  });

  it("separateDigits should return [7,1,3,9] for nums = [7,1,3,9]", () => {
    const nums = [7, 1, 3, 9];
    const result = separateDigits(nums);
    expect(result).toEqual([7, 1, 3, 9]);
  });
});
