import { maxDistinctElements } from "./solution";

describe("3397. Maximum Number of Distinct Elements After Operations", () => {
  it("maxDistinctElements should return 6 for nums = [1,2,2,3,3,4], k = 2", () => {
    const nums = [1, 2, 2, 3, 3, 4];
    const k = 2;
    const result = maxDistinctElements(nums, k);
    expect(result).toEqual(6);
  });

  it("maxDistinctElements should return 3 for nums = [4,4,4,4], k = 1", () => {
    const nums = [4, 4, 4, 4];
    const k = 1;
    const result = maxDistinctElements(nums, k);
    expect(result).toEqual(3);
  });
});
