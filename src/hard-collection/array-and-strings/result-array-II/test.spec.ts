import { resultArray } from "./solution";

describe("3525. Find X Value of Array II:", () => {
  it("resultArray should return [2,2,2] for nums = [1,2,3,4,5], k = 3, queries = [[2,2,0,2],[3,3,3,0],[0,1,0,1]]", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 3;
    const queries = [
      [2, 2, 0, 2],
      [3, 3, 3, 0],
      [0, 1, 0, 1],
    ];
    const result = resultArray(nums, k, queries);

    expect(result).toEqual([2, 2, 2]);
  });

  it("resultArray should return [1,0] for nums = [1,2,4,8,16,32], k = 4, queries = [[0,2,0,2],[0,2,0,1]]", () => {
    const nums = [1, 2, 4, 8, 16, 32];
    const k = 4;
    const queries = [
      [0, 2, 0, 2],
      [0, 2, 0, 1],
    ];
    const result = resultArray(nums, k, queries);

    expect(result).toEqual([1, 0]);
  });

  it("resultArray should return [5] for nums = [1,1,2,1,1], k = 2, queries = [[2,1,0,1]]", () => {
    const nums = [1, 1, 2, 1, 1];
    const k = 2;
    const queries = [[2, 1, 0, 1]];
    const result = resultArray(nums, k, queries);

    expect(result).toEqual([5]);
  });
});
