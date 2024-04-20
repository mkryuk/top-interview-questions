import { findFarmland } from "./solution";

describe("Find All Groups of Farmland", () => {
  it("findFarmland should return [[0,0,0,0],[1,1,2,2]] for land = [[1,0,0],[0,1,1],[0,1,1]]", () => {
    const land = [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 1],
    ];
    const result = findFarmland(land);
    expect(result).toEqual([
      [0, 0, 0, 0],
      [1, 1, 2, 2],
    ]);
  });

  it("findFarmland should return [[0,0,1,1]] for land = [[1,1],[1,1]]", () => {
    const land = [
      [1, 1],
      [1, 1],
    ];
    const result = findFarmland(land);
    expect(result).toEqual([[0, 0, 1, 1]]);
  });

  it("findFarmland should return [] for land = [[0]]", () => {
    const land = [[0]];
    const result = findFarmland(land);
    expect(result).toEqual([]);
  });
});
