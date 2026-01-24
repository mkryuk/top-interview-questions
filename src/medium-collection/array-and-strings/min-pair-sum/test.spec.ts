import { minPairSum } from "./solution";

describe("1877. Minimize Maximum Pair Sum in Array:", () => {
  it("minPairSum should return 7 for nums = [3,5,2,3]", () => {
    const nums = [3, 5, 2, 3];
    const result = minPairSum(nums);
    expect(result).toEqual(7);
  });

  it("minPairSum should return 8 for nums = [3,5,4,2,4,6]", () => {
    const nums = [3, 5, 4, 2, 4, 6];
    const result = minPairSum(nums);
    expect(result).toEqual(8);
  });
});
