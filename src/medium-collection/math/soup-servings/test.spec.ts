import { soupServings } from "./solution";

describe("808. Soup Servings", () => {
  it("soupServings should return 0.62500 for n = 50", () => {
    const n = 50;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.625, 0.00001);
  });

  it("soupServings should return 0.71875 for n = 100", () => {
    const n = 100;
    const result = soupServings(n);
    expect(result).toBeCloseTo(0.71875, 0.00001);
  });
});
