import { maximumCount } from "./solution";

describe("Maximum Count of Positive Integer and Negative Integer", () => {
  it("maximumCount should return 3 for nums = [-2,-1,-1,1,2,3]", () => {
    const nums = [-2, -1, -1, 1, 2, 3];
    const result = maximumCount(nums);
    expect(result).toEqual(3);
  });

  it("maximumCount should return 3 for nums = [-3,-2,-1,0,0,1,2]", () => {
    const nums = [-3, -2, -1, 0, 0, 1, 2];
    const result = maximumCount(nums);
    expect(result).toEqual(3);
  });

  it("maximumCount should return 4 for nums = [5,20,66,1314]", () => {
    const nums = [5, 20, 66, 1314];
    const result = maximumCount(nums);
    expect(result).toEqual(4);
  });

  it("maximumCount should return 0 for nums = [0,0,0]", () => {
    const nums = [0, 0, 0];
    const result = maximumCount(nums);
    expect(result).toEqual(0);
  });
});
