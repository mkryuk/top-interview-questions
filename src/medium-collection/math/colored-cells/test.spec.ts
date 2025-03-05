import { coloredCells } from "./solution";

describe("Count Total Number of Colored Cells", () => {
  it("coloredCells should return 1 for n = 1", () => {
    const n = 1;
    const result = coloredCells(n);
    expect(result).toEqual(1);
  });

  it("coloredCells should return 5 for n = 2", () => {
    const n = 2;
    const result = coloredCells(n);
    expect(result).toEqual(5);
  });
});
