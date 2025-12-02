import { countTrapezoids } from "./solution";

describe("3623. Count Number of Trapezoids I", () => {
  it("countTrapezoids should return 3 for points = [[1,0],[2,0],[3,0],[2,2],[3,2]]", () => {
    const points = [
      [1, 0],
      [2, 0],
      [3, 0],
      [2, 2],
      [3, 2],
    ];
    const result = countTrapezoids(points);
    expect(result).toEqual(3);
  });

  it("countTrapezoids should return 1 for points = [[0,0],[1,0],[0,1],[2,1]]", () => {
    const points = [
      [0, 0],
      [1, 0],
      [0, 1],
      [2, 1],
    ];
    const result = countTrapezoids(points);
    expect(result).toEqual(1);
  });
});
