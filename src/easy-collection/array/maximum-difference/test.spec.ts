import { maximumDifference } from "./solution";

describe("2016. Maximum Difference Between Increasing Elements", () => {
  it("maximumDifference should return 4 for nums = [7,1,5,4]", () => {
    const nums = [7, 1, 5, 4];
    const result = maximumDifference(nums);
    expect(result).toEqual(4);
  });

  it("maximumDifference should return -1 for nums = [9,4,3,2]", () => {
    const nums = [9, 4, 3, 2];
    const result = maximumDifference(nums);
    expect(result).toEqual(-1);
  });

  it("maximumDifference should return 9 for nums = [1,5,2,10]", () => {
    const nums = [1, 5, 2, 10];
    const result = maximumDifference(nums);
    expect(result).toEqual(9);
  });
});
