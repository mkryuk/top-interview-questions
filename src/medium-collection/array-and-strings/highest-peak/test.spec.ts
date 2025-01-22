import { highestPeak } from "./solution";

describe("Map of Highest Peak", () => {
  it("highestPeak should return [[1,0],[2,1]] for isWater = [[0,1],[0,0]]", () => {
    const isWater = [
      [0, 1],
      [0, 0],
    ];
    const result = highestPeak(isWater);
    expect(result).toEqual([
      [1, 0],
      [2, 1],
    ]);
  });

  it("highestPeak should return [[1,1,0],[0,1,1],[1,2,2]] for isWater = [[0,0,1],[1,0,0],[0,0,0]]", () => {
    const isWater = [
      [0, 0, 1],
      [1, 0, 0],
      [0, 0, 0],
    ];
    const result = highestPeak(isWater);
    expect(result).toEqual([
      [1, 1, 0],
      [0, 1, 1],
      [1, 2, 2],
    ]);
  });
});
