import { regionsBySlashes } from "./solution";

describe("Regions Cut By Slashes", () => {
  it('regionsBySlashes should return 2 for grid = [" /","/ "]', () => {
    const grid = [" /", "/ "];
    const result = regionsBySlashes(grid);
    expect(result).toEqual(2);
  });

  it('regionsBySlashes should return 1 for grid = [" /","  "]', () => {
    const grid = [" /", "  "];
    const result = regionsBySlashes(grid);
    expect(result).toEqual(1);
  });

  it('regionsBySlashes should return 5 for grid = ["/\\","\\/"]', () => {
    const grid = ["/\\", "\\/"];
    const result = regionsBySlashes(grid);
    expect(result).toEqual(5);
  });
});
