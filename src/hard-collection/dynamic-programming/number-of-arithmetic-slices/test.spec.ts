import { numberOfArithmeticSlices } from "./solution";

describe("Arithmetic Slices II - Subsequence:", () => {
  it("numberOfArithmeticSlices should return 7 for nums = [2,4,6,8,10]", () => {
    const nums = [2, 4, 6, 8, 10];
    const result = numberOfArithmeticSlices(nums);
    expect(result).toEqual(7);
  });

  it("numberOfArithmeticSlices should return 16 for nums = [7,7,7,7,7]", () => {
    const nums = [7, 7, 7, 7, 7];
    const result = numberOfArithmeticSlices(nums);
    expect(result).toEqual(16);
  });
});
