import { numberOfSubmatrices } from "./solution";

describe("3212. Count Submatrices With Equal Frequency of X and Y", () => {
  it('numberOfSubmatrices should return 3 for grid = [["X","Y","."],["Y",".","."]]', () => {
    const grid = [
      ["X", "Y", "."],
      ["Y", ".", "."],
    ];
    const result = numberOfSubmatrices(grid);
    expect(result).toEqual(3);
  });

  it('numberOfSubmatrices should return 0 for grid = [["X","X"],["X","Y"]]', () => {
    const grid = [
      ["X", "X"],
      ["X", "Y"],
    ];
    const result = numberOfSubmatrices(grid);
    expect(result).toEqual(0);
  });

  it('numberOfSubmatrices should return 0 for grid = [[".","."],[".","."]]', () => {
    const grid = [
      [".", "."],
      [".", "."],
    ];
    const result = numberOfSubmatrices(grid);
    expect(result).toEqual(0);
  });
});
