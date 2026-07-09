import { pathExistenceQueries } from "./solution";

describe("3532. Path Existence Queries in a Graph I:", () => {
  it("pathExistenceQueries should return [true,false] for n = 2, nums = [1,3], maxDiff = 1, queries = [[0,0],[0,1]]", () => {
    const n = 2;
    const nums = [1, 3];
    const maxDiff = 1;
    const queries = [
      [0, 0],
      [0, 1],
    ];
    const result = pathExistenceQueries(n, nums, maxDiff, queries);
    expect(result).toEqual([true, false]);
  });

  it("pathExistenceQueries should return [false,false,true,true] for n = 4, nums = [2,5,6,8], maxDiff = 2, queries = [[0,1],[0,2],[1,3],[2,3]]", () => {
    const n = 4;
    const nums = [2, 5, 6, 8];
    const maxDiff = 2;
    const queries = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 3],
    ];
    const result = pathExistenceQueries(n, nums, maxDiff, queries);
    expect(result).toEqual([false, false, true, true]);
  });
});
