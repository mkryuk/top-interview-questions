import { new21Game } from "./solution";

describe("837. New 21 Game", () => {
  it("new21Game should return 1.0 for n = 10, k = 1, maxPts = 10", () => {
    const n = 10;
    const k = 1;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(1.0);
  });

  it("new21Game should return 0.6 for n = 6, k = 1, maxPts = 10", () => {
    const n = 6;
    const k = 1;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(0.6);
  });

  it("new21Game should return 0.73278 for n = 21, k = 17, maxPts = 10", () => {
    const n = 21;
    const k = 17;
    const maxPts = 10;
    const result = new21Game(n, k, maxPts);
    expect(result).toBeCloseTo(0.73278, 5);
  });
});
