import { numTilePossibilities } from "./solution";

describe("Letter Tile Possibilities", () => {
  it('numTilePossibilities should return 8 for tiles = "AAB"', () => {
    const tiles = "AAB";
    const result = numTilePossibilities(tiles);
    expect(result).toEqual(8);
  });

  it('numTilePossibilities should return 188 for tiles = "AAABBC"', () => {
    const tiles = "AAABBC";
    const result = numTilePossibilities(tiles);
    expect(result).toEqual(188);
  });

  it('numTilePossibilities should return 1 for tiles = "V"', () => {
    const tiles = "V";
    const result = numTilePossibilities(tiles);
    expect(result).toEqual(1);
  });
});
