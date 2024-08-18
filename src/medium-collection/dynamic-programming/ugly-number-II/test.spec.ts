import { nthUglyNumber } from "./solution";

describe("Ugly Number II", () => {
  it("nthUglyNumber should return 12 for n = 10", () => {
    const n = 10;
    const result = nthUglyNumber(n);
    expect(result).toEqual(12);
  });

  it("nthUglyNumber should return 1 for n = 1", () => {
    const n = 1;
    const result = nthUglyNumber(n);
    expect(result).toEqual(1);
  });
});
