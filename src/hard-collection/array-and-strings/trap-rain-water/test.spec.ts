import { trapRainWater } from "./solution";

describe("Trapping Rain Water II", () => {
  it("trapRainWater should return 4 for heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]", () => {
    const heightMap = [
      [1, 4, 3, 1, 3, 2],
      [3, 2, 1, 3, 2, 4],
      [2, 3, 3, 2, 3, 1],
    ];
    const result = trapRainWater(heightMap);
    expect(result).toEqual(4);
  });

  it("trapRainWater should return 10 for heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]", () => {
    const heightMap = [
      [3, 3, 3, 3, 3],
      [3, 2, 2, 2, 3],
      [3, 2, 1, 2, 3],
      [3, 2, 2, 2, 3],
      [3, 3, 3, 3, 3],
    ];
    const result = trapRainWater(heightMap);
    expect(result).toEqual(10);
  });

  it("trapRainWater should return 2 for heightMap = [[3,3,3],[3,0,4],[3,2,5]]", () => {
    const heightMap = [
      [3, 3, 3],
      [3, 0, 4],
      [3, 2, 5],
    ];
    const result = trapRainWater(heightMap);
    expect(result).toEqual(2);
  });
});
