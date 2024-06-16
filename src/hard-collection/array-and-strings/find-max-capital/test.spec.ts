import { findMaximizedCapital } from "./solution";

describe("IPO", () => {
  it("findMaximizedCapital should return 4 for k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]", () => {
    const k = 2;
    const w = 0;
    const profits = [1, 2, 3];
    const capital = [0, 1, 1];
    const result = findMaximizedCapital(k, w, profits, capital);
    expect(result).toEqual(4);
  });

  it("findMaximizedCapital should return 6 for k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]", () => {
    const k = 3;
    const w = 0;
    const profits = [1, 2, 3];
    const capital = [0, 1, 2];
    const result = findMaximizedCapital(k, w, profits, capital);
    expect(result).toEqual(6);
  });
});
