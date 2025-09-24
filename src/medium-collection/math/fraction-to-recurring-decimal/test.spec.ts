import { fractionToDecimal } from "./solution";

describe("166. Fraction to Recurring Decimal", () => {
  it("fractionToDecimal should return 0.5 for numerator = 1, denominator = 2", () => {
    let numerator = 1;
    let denominator = 2;
    expect(fractionToDecimal(numerator, denominator)).toBe("0.5");
  });

  it("fractionToDecimal should return 2 for numerator = 2, denominator = 1", () => {
    let numerator = 2;
    let denominator = 1;
    expect(fractionToDecimal(numerator, denominator)).toBe("2");
  });

  it("fractionToDecimal should return 0.(012) for numerator = 4, denominator = 333", () => {
    let numerator = 4;
    let denominator = 333;
    expect(fractionToDecimal(numerator, denominator)).toBe("0.(012)");
  });

  it("fractionToDecimal should return -6.25 for numerator = -50, denominator = 8", () => {
    let numerator = -50;
    let denominator = 8;
    expect(fractionToDecimal(numerator, denominator)).toBe("-6.25");
  });

  it("fractionToDecimal should return 6.25 for numerator = -50, denominator = -8", () => {
    let numerator = -50;
    let denominator = -8;
    expect(fractionToDecimal(numerator, denominator)).toBe("6.25");
  });
});
