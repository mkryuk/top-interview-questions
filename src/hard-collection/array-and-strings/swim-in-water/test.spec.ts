import { swimInWater } from "./solution";

describe("778. Swim in Rising Water", () => {
  it("swimInWater should return 3 for grid = [[0,2],[1,3]]", () => {
    const grid = [
      [0, 2],
      [1, 3],
    ];
    const result = swimInWater(grid);
    expect(result).toEqual(3);
  });

  it("swimInWater should return 16 for grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]", () => {
    const grid = [
      [0, 1, 2, 3, 4],
      [24, 23, 22, 21, 5],
      [12, 13, 14, 15, 16],
      [11, 17, 18, 19, 20],
      [10, 9, 8, 7, 6],
    ];
    const result = swimInWater(grid);
    expect(result).toEqual(16);
  });
});
