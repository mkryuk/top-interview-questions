import { getResults } from "./solution";

describe("3161. Block Placement Queries:", () => {
  it("getResults should return [false,true,true] for queries = [[1,2],[2,3,3],[2,3,1],[2,2,2]]", () => {
    const queries = [
      [1, 2],
      [2, 3, 3],
      [2, 3, 1],
      [2, 2, 2],
    ];
    const result = getResults(queries);
    expect(result).toEqual([false, true, true]);
  });

  it("getResults should return [true,true,false] for queries = [[1,7],[2,7,6],[1,2],[2,7,5],[2,7,6]]", () => {
    const queries = [
      [1, 7],
      [2, 7, 6],
      [1, 2],
      [2, 7, 5],
      [2, 7, 6],
    ];
    const result = getResults(queries);
    expect(result).toEqual([true, true, false]);
  });
});
