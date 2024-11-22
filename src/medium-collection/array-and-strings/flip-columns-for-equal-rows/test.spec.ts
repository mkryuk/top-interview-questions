import { maxEqualRowsAfterFlips } from "./solution";

describe("Flip Columns For Maximum Number of Equal Rows", () => {
  it("maxEqualRowsAfterFlips should return 1 for matrix = [[0,1],[1,1]]", () => {
    const matrix = [
      [0, 1],
      [1, 1],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toEqual(1);
  });

  it("maxEqualRowsAfterFlips should return 2 for matrix = [[0,1],[1,0]]", () => {
    const matrix = [
      [0, 1],
      [1, 0],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toEqual(2);
  });

  it("maxEqualRowsAfterFlips should return 2 for matrix = [[0,0,0],[0,0,1],[1,1,0]]", () => {
    const matrix = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ];
    const result = maxEqualRowsAfterFlips(matrix);
    expect(result).toEqual(2);
  });
});
