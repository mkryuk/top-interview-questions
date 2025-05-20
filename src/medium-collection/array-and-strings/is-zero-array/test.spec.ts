import { isZeroArray } from "./solution";

describe("Zero Array Transformation I", () => {
  it("isZeroArray should return true for nums = [1,0,1], queries = [[0,2]]", () => {
    const nums = [1, 0, 1];
    const queries = [[0, 2]];
    const result = isZeroArray(nums, queries);
    expect(result).toBeTrue();
  });

  it("isZeroArray should return false for nums = [4,3,2,1], queries = [[1,3],[0,2]]", () => {
    const nums = [4, 3, 2, 1];
    const queries = [
      [1, 3],
      [0, 2],
    ];
    const result = isZeroArray(nums, queries);
    expect(result).toBeFalse();
  });
});
