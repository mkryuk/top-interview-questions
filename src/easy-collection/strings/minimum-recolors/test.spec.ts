import { minimumRecolors } from "./solution";

describe("Minimum Recolors to Get K Consecutive Black Blocks", () => {
  it('minimumRecolors should return 3 for blocks = "WBBWWBBWBW", k = 7', () => {
    const blocks = "WBBWWBBWBW";
    const k = 7;
    const result = minimumRecolors(blocks, k);
    expect(result).toEqual(3);
  });

  it('minimumRecolors should return 0 for blocks = "WBWBBBW", k = 2', () => {
    const blocks = "WBWBBBW";
    const k = 2;
    const result = minimumRecolors(blocks, k);
    expect(result).toEqual(0);
  });
});
