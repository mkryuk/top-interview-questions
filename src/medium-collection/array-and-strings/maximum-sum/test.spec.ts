import { maximumSum } from "./solution";

describe("Max Sum of a Pair With Equal Sum of Digits", () => {
  it("maximumSum should return 54 for nums = [18,43,36,13,7]", () => {
    const nums = [18, 43, 36, 13, 7];
    const result = maximumSum(nums);
    expect(result).toEqual(54);
  });

  it("maximumSum should return -1 for nums = [10,12,19,14]", () => {
    const nums = [10, 12, 19, 14];
    const result = maximumSum(nums);
    expect(result).toEqual(-1);
  });
});
