import { minDifference } from "./solution";

describe("Minimum Difference Between Largest and Smallest Value in Three Moves", () => {
  it("minDifference should return 0 for nums = [5,3,2,4]", () => {
    const nums = [5, 3, 2, 4];
    const result = minDifference(nums);
    expect(result).toEqual(0);
  });

  it("minDifference should return 1 for nums = [1,5,0,10,14]", () => {
    const nums = [1, 5, 0, 10, 14];
    const result = minDifference(nums);
    expect(result).toEqual(1);
  });

  it("minDifference should return 0 for nums = [3,100,20]", () => {
    const nums = [3, 100, 20];
    const result = minDifference(nums);
    expect(result).toEqual(0);
  });
});
