import { numOfWays } from "./solution";

describe("1411. Number of Ways to Paint N × 3 Grid", () => {
  it("numOfWays should return 12 for n = 1", () => {
    const n = 1;
    const result = numOfWays(n);
    expect(result).toEqual(12);
  });

  it("numOfWays should return 30228214 for n = 5000", () => {
    const n = 5000;
    const result = numOfWays(n);
    expect(result).toEqual(30228214);
  });
});
