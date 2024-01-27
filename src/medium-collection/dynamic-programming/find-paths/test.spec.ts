import { findPaths } from "./solution";

describe("Out of Boundary Paths:", () => {
  it("findPaths should return 6 for m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0", () => {
    const m = 2;
    const n = 2;
    const maxMove = 2;
    const startRow = 0;
    const startColumn = 0;
    const result = findPaths(m, n, maxMove, startRow, startColumn);
    expect(result).toEqual(6);
  });

  it("findPaths should return 12 for m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1", () => {
    const m = 1;
    const n = 3;
    const maxMove = 3;
    const startRow = 0;
    const startColumn = 1;
    const result = findPaths(m, n, maxMove, startRow, startColumn);
    expect(result).toEqual(12);
  });

  it("findPaths should return 102984580 for m = 8, n = 7, maxMove = 16, startRow = 1, startColumn = 5", () => {
    const m = 8;
    const n = 7;
    const maxMove = 16;
    const startRow = 1;
    const startColumn = 5;
    const result = findPaths(m, n, maxMove, startRow, startColumn);
    expect(result).toEqual(102984580);
  });

  it("findPaths should return 390153306 for m = 36, n = 5, maxMove = 50, startRow = 15, startColumn = 3", () => {
    const m = 36;
    const n = 5;
    const maxMove = 50;
    const startRow = 15;
    const startColumn = 3;
    const result = findPaths(m, n, maxMove, startRow, startColumn);
    expect(result).toEqual(390153306);
  });
});
