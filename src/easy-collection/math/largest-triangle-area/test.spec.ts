import { largestTriangleArea } from "./solution";

describe("812. Largest Triangle Area", () => {
  it("largestTriangleArea should return 2.0 for points = [[0,0],[0,1],[1,0],[0,2],[2,0]]", () => {
    const points = [
      [0, 0],
      [0, 1],
      [1, 0],
      [0, 2],
      [2, 0],
    ];
    const result = largestTriangleArea(points);
    expect(result).toEqual(2.0);
  });

  it("largestTriangleArea should return 0.5 for points = [[1,0],[0,0],[0,1]]", () => {
    const points = [
      [1, 0],
      [0, 0],
      [0, 1],
    ];
    const result = largestTriangleArea(points);
    expect(result).toEqual(0.5);
  });
});
