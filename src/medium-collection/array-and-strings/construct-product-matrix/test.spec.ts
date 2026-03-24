import { constructProductMatrix } from "./solution";

describe("Construct Product Matrix", () => {
  it("constructProductMatrix should return [[24,12],[8,6]] for grid = [[1,2],[3,4]]", () => {
    const grid = [
      [1, 2],
      [3, 4],
    ];
    const result = constructProductMatrix(grid);
    expect(result).toEqual([
      [24, 12],
      [8, 6],
    ]);
  });

  it("constructProductMatrix should return [[2],[0],[0]] for grid = [[12345],[2],[1]]", () => {
    const grid = [[12345], [2], [1]];
    const result = constructProductMatrix(grid);
    expect(result).toEqual([[2], [0], [0]]);
  });
});
