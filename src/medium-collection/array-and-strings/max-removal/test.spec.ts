import { maxRemoval } from "./solution";

describe("Zero Array Transformation III", () => {
  it("maxRemoval should return 1 for nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]", () => {
    const nums = [2, 0, 2];
    const queries = [
      [0, 2],
      [0, 2],
      [1, 1],
    ];
    const result = maxRemoval(nums, queries);
    expect(result).toEqual(1);
  });

  it("maxRemoval should return 2 for nums = [1,1,1,1], queries = [[1,3],[0,2],[1,3],[1,2]]", () => {
    const nums = [1, 1, 1, 1];
    const queries = [
      [1, 3],
      [0, 2],
      [1, 3],
      [1, 2],
    ];
    const result = maxRemoval(nums, queries);
    expect(result).toEqual(2);
  });

  it("maxRemoval should return -1 for nums = [1,2,3,4], queries = [[0,3]]", () => {
    const nums = [1, 2, 3, 4];
    const queries = [[0, 3]];
    const result = maxRemoval(nums, queries);
    expect(result).toEqual(-1);
  });
});
