import { minZeroArray } from "./solution";

describe("Zero Array Transformation II", () => {
  it("minZeroArray should return 2 for nums = [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]", () => {
    const nums = [2, 0, 2];
    const queries = [
      [0, 2, 1],
      [0, 2, 1],
      [1, 1, 3],
    ];
    const result = minZeroArray(nums, queries);
    expect(result).toEqual(2);
  });

  it("minZeroArray should return -1 for nums = [4,3,2,1], queries = [[1,3,2],[0,2,1]]", () => {
    const nums = [4, 3, 2, 1];
    const queries = [
      [1, 3, 2],
      [0, 2, 1],
    ];
    const result = minZeroArray(nums, queries);
    expect(result).toEqual(-1);
  });
});
