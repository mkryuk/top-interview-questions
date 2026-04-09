import { xorAfterQueries } from "./solution";

describe("XOR After Range Multiplication Queries I:", () => {
  it("xorAfterQueries should return 4 for nums = [1,1,1], queries = [[0,2,1,4]]", () => {
    const nums = [1, 1, 1];
    const queries = [[0, 2, 1, 4]];
    const result = xorAfterQueries(nums, queries);
    expect(result).toEqual(4);
  });

  it("xorAfterQueries should return 31 for nums = [2,3,1,5,4], queries = [[1,4,2,3],[0,2,1,2]]", () => {
    const nums = [2, 3, 1, 5, 4];
    const queries = [
      [1, 4, 2, 3],
      [0, 2, 1, 2],
    ];
    const result = xorAfterQueries(nums, queries);
    expect(result).toEqual(31);
  });
});
