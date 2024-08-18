import { maxPoints } from "./solution";

describe("Maximum Number of Points with Cost", () => {
  it("maxPoints should return 9 for points = [[1,2,3],[1,5,1],[3,1,1]]", () => {
    const points = [
      [1, 2, 3],
      [1, 5, 1],
      [3, 1, 1],
    ];
    const result = maxPoints(points);
    expect(result).toEqual(9);
  });

  it("maxPoints should return 11 for points = [[1,5],[2,3],[4,2]]", () => {
    const points = [
      [1, 5],
      [2, 3],
      [4, 2],
    ];
    const result = maxPoints(points);
    expect(result).toEqual(11);
  });
});
