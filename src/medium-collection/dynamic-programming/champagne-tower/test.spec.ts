import { champagneTower } from "./solution";

describe("799. Champagne Tower", () => {
  it("champagneTower should return 0.00000 for poured = 1, query_row = 1, query_glass = 1", () => {
    const poured = 1;
    const queryRow = 1;
    const queryGlass = 1;
    const result = champagneTower(poured, queryRow, queryGlass);
    expect(result).toBeCloseTo(0.0, 5);
  });

  it("champagneTower should return 0.50000 for poured = 2, query_row = 1, query_glass = 1", () => {
    const poured = 2;
    const queryRow = 1;
    const queryGlass = 1;
    const result = champagneTower(poured, queryRow, queryGlass);
    expect(result).toBeCloseTo(0.5, 5);
  });

  it("champagneTower should return 1.00000 for poured = 100000009, query_row = 33, query_glass = 17", () => {
    const poured = 100000009;
    const queryRow = 33;
    const queryGlass = 17;
    const result = champagneTower(poured, queryRow, queryGlass);
    expect(result).toBeCloseTo(1.0, 5);
  });
});
