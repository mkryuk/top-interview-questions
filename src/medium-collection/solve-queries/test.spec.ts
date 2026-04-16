import { solveQueries } from "./solution";

describe("3488. Closest Equal Element Queries:", () => {
  it("solveQueries should return [2,-1,3] for nums = [1,3,1,4,1,3,2], queries = [0,3,5]", () => {
    const nums = [1, 3, 1, 4, 1, 3, 2];
    const queries = [0, 3, 5];
    const result = solveQueries(nums, queries);
    expect(result).toEqual([2, -1, 3]);
  });

  it("solveQueries should return [-1,-1,-1,-1] for nums = [1,2,3,4], queries = [0,1,2,3]", () => {
    const nums = [1, 2, 3, 4];
    const queries = [0, 1, 2, 3];
    const result = solveQueries(nums, queries);
    expect(result).toEqual([-1, -1, -1, -1]);
  });
});
