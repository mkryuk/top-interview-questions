import { hasAlternatingBits } from "./solution";

describe("693. Binary Number with Alternating Bits", () => {
  it("hasAlternatingBits should return true for n = 5", () => {
    const n = 5;
    const result = hasAlternatingBits(n);
    expect(result).toEqual(true);
  });

  it("hasAlternatingBits should return false for n = 7", () => {
    const n = 7;
    const result = hasAlternatingBits(n);
    expect(result).toEqual(false);
  });

  it("hasAlternatingBits should return false for n = 11", () => {
    const n = 11;
    const result = hasAlternatingBits(n);
    expect(result).toEqual(false);
  });
});
