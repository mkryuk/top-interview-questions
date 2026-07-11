import { pathExistenceQueries } from "./solution";

describe("3534. Path Existence Queries in a Graph II:", () => {
  it("pathExistenceQueries should return [1,1] for example 1", () => {
    const n = 5;
    const nums = [1, 8, 3, 4, 2];
    const maxDiff = 3;
    const queries = [
      [0, 3],
      [2, 4],
    ];
    const result = pathExistenceQueries(n, nums, maxDiff, queries);
    expect(result).toEqual([1, 1]);
  });

  it("pathExistenceQueries should return [1,2,-1,1] for example 2", () => {
    const n = 5;
    const nums = [5, 3, 1, 9, 10];
    const maxDiff = 2;
    const queries = [
      [0, 1],
      [0, 2],
      [2, 3],
      [4, 3],
    ];
    const result = pathExistenceQueries(n, nums, maxDiff, queries);
    expect(result).toEqual([1, 2, -1, 1]);
  });

  it("pathExistenceQueries should return [0,-1,-1] for example 3", () => {
    const n = 3;
    const nums = [3, 6, 1];
    const maxDiff = 1;
    const queries = [
      [0, 0],
      [0, 1],
      [1, 2],
    ];
    const result = pathExistenceQueries(n, nums, maxDiff, queries);
    expect(result).toEqual([0, -1, -1]);
  });
});
