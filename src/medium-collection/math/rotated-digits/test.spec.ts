import { rotatedDigits } from "./solution";

describe("788. Rotated Digits:", () => {
  it("rotatedDigits should return 4 for n = 10", () => {
    const n = 10;
    const result = rotatedDigits(n);
    expect(result).toEqual(4);
  });

  it("rotatedDigits should return 0 for n = 1", () => {
    const n = 1;
    const result = rotatedDigits(n);
    expect(result).toEqual(0);
  });

  it("rotatedDigits should return 1 for n = 2", () => {
    const n = 2;
    const result = rotatedDigits(n);
    expect(result).toEqual(1);
  });
});
