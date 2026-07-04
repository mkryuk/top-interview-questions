import { minScore } from "./solution";

describe("2492. Minimum Score of a Path Between Two Cities:", () => {
  it("minScore should return 5 for n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]", () => {
    const n = 4;
    const roads = [
      [1, 2, 9],
      [2, 3, 6],
      [2, 4, 5],
      [1, 4, 7],
    ];
    const result = minScore(n, roads);
    expect(result).toEqual(5);
  });

  it("minScore should return 2 for n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]", () => {
    const n = 4;
    const roads = [
      [1, 2, 2],
      [1, 3, 4],
      [3, 4, 7],
    ];
    const result = minScore(n, roads);
    expect(result).toEqual(2);
  });
});
