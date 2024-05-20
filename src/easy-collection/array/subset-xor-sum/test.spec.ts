import { subsetXORSum } from "./solution";

describe("Sum of All Subset XOR Totals", () => {
  it("subsetXORSum should return 6 for nums = [1,3]", () => {
    const nums = [1, 3];
    const result = subsetXORSum(nums);
    expect(result).toEqual(6);
  });

  it("subsetXORSum should return 28 for nums = [5,1,6]", () => {
    const nums = [5, 1, 6];
    const result = subsetXORSum(nums);
    expect(result).toEqual(28);
  });

  it("subsetXORSum should return 480 for nums = [3,4,5,6,7,8]", () => {
    const nums = [3, 4, 5, 6, 7, 8];
    const result = subsetXORSum(nums);
    expect(result).toEqual(480);
  });
});
