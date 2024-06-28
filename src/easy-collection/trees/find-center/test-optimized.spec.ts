import { findCenter } from "./solution-optimized";

describe("Find Center of Star Graph", () => {
  it("findCenter should return 2 for edges = [[1,2],[2,3],[4,2]]", () => {
    const edges = [
      [1, 2],
      [2, 3],
      [4, 2],
    ];
    const result = findCenter(edges);
    expect(result).toEqual(2);
  });

  it("findCenter should return 1 for edges = [[1,2],[5,1],[1,3],[1,4]]", () => {
    const edges = [
      [1, 2],
      [5, 1],
      [1, 3],
      [1, 4],
    ];
    const result = findCenter(edges);
    expect(result).toEqual(1);
  });
});
