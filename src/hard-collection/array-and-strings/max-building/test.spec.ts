import { maxBuilding } from "./solution";

describe("1840. Maximum Building Height:", () => {
  it("maxBuilding should return 2 for n = 5, restrictions = [[2,1],[4,1]]", () => {
    const n = 5;
    const restrictions = [
      [2, 1],
      [4, 1],
    ];
    const result = maxBuilding(n, restrictions);
    expect(result).toEqual(2);
  });

  it("maxBuilding should return 5 for n = 6, restrictions = []", () => {
    const n = 6;
    const restrictions: number[][] = [];
    const result = maxBuilding(n, restrictions);
    expect(result).toEqual(5);
  });

  it("maxBuilding should return 5 for n = 10, restrictions = [[5,3],[2,5],[7,4],[10,3]]", () => {
    const n = 10;
    const restrictions = [
      [5, 3],
      [2, 5],
      [7, 4],
      [10, 3],
    ];
    const result = maxBuilding(n, restrictions);
    expect(result).toEqual(5);
  });
});
