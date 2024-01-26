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
    expect(result).toEqual(6);
  });
});
