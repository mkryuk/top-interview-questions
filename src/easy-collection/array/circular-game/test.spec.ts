import { circularGameLosers } from "./solution";

describe("Find the Losers of the Circular Game", () => {
  it("circularGameLosers should return [4,5] for n = 5, k = 2", () => {
    const n = 5;
    const k = 2;
    const result = circularGameLosers(n, k);
    expect(result).toEqual([4, 5]);
  });

  it("circularGameLosers should return [2,3,4] for n = 4, k = 4", () => {
    const n = 4;
    const k = 4;
    const result = circularGameLosers(n, k);
    expect(result).toEqual([2, 3, 4]);
  });
});
