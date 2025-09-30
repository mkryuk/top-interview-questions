import { triangularSum } from "./solution";

describe("2221. Find Triangular Sum of an Array", () => {
  it("triangularSum should return 8 for nums = [1,2,3,4,5]", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = triangularSum(nums);
    expect(result).toEqual(8);
  });

  it("triangularSum should return 5 for nums = [5]", () => {
    const nums = [5];
    const result = triangularSum(nums);
    expect(result).toEqual(5);
  });
});
