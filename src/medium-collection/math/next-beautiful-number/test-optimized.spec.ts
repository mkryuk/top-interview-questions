import { nextBeautifulNumber } from "./solution-optimized";

describe("2048. Next Greater Numerically Balanced Number", () => {
  it("nextBeautifulNumber should return 22 for n = 1", () => {
    const n = 1;
    const result = nextBeautifulNumber(n);
    expect(result).toEqual(22);
  });

  it("nextBeautifulNumber should return 1333 for n = 1000", () => {
    const n = 1000;
    const result = nextBeautifulNumber(n);
    expect(result).toEqual(1333);
  });

  it("nextBeautifulNumber should return 3133 for n = 3000", () => {
    const n = 3000;
    const result = nextBeautifulNumber(n);
    expect(result).toEqual(3133);
  });
});
