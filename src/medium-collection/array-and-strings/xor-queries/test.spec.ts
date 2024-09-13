import { xorQueries } from "./solution";

describe("XOR Queries of a Subarray", () => {
  it("xorQueries should return [2,7,14,8] for arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]", () => {
    const arr = [1, 3, 4, 8];
    const queries = [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ];
    const result = xorQueries(arr, queries);
    expect(result).toEqual([2, 7, 14, 8]);
  });

  it("xorQueries should return [8,0,4,4] for arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]", () => {
    const arr = [4, 8, 2, 10];
    const queries = [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ];
    const result = xorQueries(arr, queries);
    expect(result).toEqual([8, 0, 4, 4]);
  });
});
