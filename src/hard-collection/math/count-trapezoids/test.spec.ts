import { countTrapezoids } from "./solution";

describe("3625. Count Number of Trapezoids II", () => {
  it("countTrapezoids should return 2 for points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]", () => {
    const points = [
      [-3, 2],
      [3, 0],
      [2, 3],
      [3, 2],
      [2, -3],
    ];
    const result = countTrapezoids(points);
    expect(result).toEqual(2);
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
