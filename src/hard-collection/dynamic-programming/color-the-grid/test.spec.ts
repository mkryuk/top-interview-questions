import { colorTheGrid } from "./solution";

describe("Painting a Grid With Three Different Colors", () => {
  it("colorTheGrid should return 3 for m = 1, n = 1", () => {
    const m = 1;
    const n = 1;
    const result = colorTheGrid(m, n);
    expect(result).toEqual(3);
  });

  it("colorTheGrid should return 6 for m = 1, n = 2", () => {
    const m = 1;
    const n = 2;
    const result = colorTheGrid(m, n);
    expect(result).toEqual(6);
  });

  it("colorTheGrid should return 580986 for m = 5, n = 5", () => {
    const m = 5;
    const n = 5;
    const result = colorTheGrid(m, n);
    expect(result).toEqual(580986);
  });
});
