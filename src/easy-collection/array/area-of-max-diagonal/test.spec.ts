import { areaOfMaxDiagonal } from "./solution";

describe("3000. Maximum Area of Longest Diagonal Rectangle", () => {
  it("areaOfMaxDiagonal should return 48 for dimensions = [[9,3],[8,6]]", () => {
    const dimensions = [
      [9, 3],
      [8, 6],
    ];
    const result = areaOfMaxDiagonal(dimensions);
    expect(result).toEqual(48);
  });

  it("areaOfMaxDiagonal should return 12 for dimensions = [[3,4],[4,3]]", () => {
    const dimensions = [
      [3, 4],
      [4, 3],
    ];
    const result = areaOfMaxDiagonal(dimensions);
    expect(result).toEqual(12);
  });

  it("areaOfMaxDiagonal should return 20 for dimensions = [[6,5],[8,6],[2,10],[8,1],[9,2],[3,5],[3,5]]", () => {
    const dimensions = [
      [6, 5],
      [8, 6],
      [2, 10],
      [8, 1],
      [9, 2],
      [3, 5],
      [3, 5],
    ];
    const result = areaOfMaxDiagonal(dimensions);
    expect(result).toEqual(20);
  });
});
