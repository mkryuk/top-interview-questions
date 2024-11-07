import { largestCombination } from "./solution";

describe("Largest Combination With Bitwise AND Greater Than Zero", () => {
  it("largestCombination should return 4 for candidates = [16,17,71,62,12,24,14]", () => {
    const candidates = [16, 17, 71, 62, 12, 24, 14];
    const result = largestCombination(candidates);
    expect(result).toEqual(4);
  });

  it("largestCombination should return 2 for candidates = [8,8]", () => {
    const candidates = [8, 8];
    const result = largestCombination(candidates);
    expect(result).toEqual(2);
  });
});
