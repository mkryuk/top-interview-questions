import { getMinDistance } from "./solution";

describe("1848. Minimum Distance to the Target Element:", () => {
  it("getMinDistance should return 1 for nums = [1,2,3,4,5], target = 5, start = 3", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 5;
    const start = 3;
    const result = getMinDistance(nums, target, start);
    expect(result).toEqual(1);
  });

  it("getMinDistance should return 0 for nums = [1], target = 1, start = 0", () => {
    const nums = [1];
    const target = 1;
    const start = 0;
    const result = getMinDistance(nums, target, start);
    expect(result).toEqual(0);
  });

  it("getMinDistance should return 0 for nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0", () => {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const target = 1;
    const start = 0;
    const result = getMinDistance(nums, target, start);
    expect(result).toEqual(0);
  });
});
