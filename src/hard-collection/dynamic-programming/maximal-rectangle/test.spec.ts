import { maximalRectangle } from "./solution";

describe("85. Maximal Rectangle:", () => {
  it("maximalRectangle should return 6 for Example 1", () => {
    const matrix = [
      ["1", "0", "1", "0", "0"],
      ["1", "0", "1", "1", "1"],
      ["1", "1", "1", "1", "1"],
      ["1", "0", "0", "1", "0"],
    ];
    const result = maximalRectangle(matrix);
    expect(result).toEqual(6);
  });

  it('maximalRectangle should return 0 for matrix = [["0"]]', () => {
    const matrix = [["0"]];
    const result = maximalRectangle(matrix);
    expect(result).toEqual(0);
  });

  it('maximalRectangle should return 1 for matrix = [["1"]]', () => {
    const matrix = [["1"]];
    const result = maximalRectangle(matrix);
    expect(result).toEqual(1);
  });
});
