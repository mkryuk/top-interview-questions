import { minimumScore } from "./solution";

describe("2322. Minimum Score After Removals on a Tree", () => {
  it("minimumScore should return 9 for nums = [1,5,5,4,11], edges = [[0,1],[1,2],[1,3],[3,4]]", () => {
    const nums = [1, 5, 5, 4, 11];
    const edges = [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ];
    const result = minimumScore(nums, edges);
    expect(result).toEqual(9);
  });

  it("minimumScore should return 0 for nums = [5,5,2,4,4,2], edges = [[0,1],[1,2],[5,2],[4,3],[1,3]]", () => {
    const nums = [5, 5, 2, 4, 4, 2];
    const edges = [
      [0, 1],
      [1, 2],
      [5, 2],
      [4, 3],
      [1, 3],
    ];
    const result = minimumScore(nums, edges);
    expect(result).toEqual(0);
  });
});
