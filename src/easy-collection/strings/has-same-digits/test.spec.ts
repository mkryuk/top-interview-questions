import { hasSameDigits } from "./solution";

describe("3461. Check If Digits Are Equal in String After Operations I", () => {
  it('hasSameDigits should return true for s = "3902"', () => {
    const s = "3902";
    const result = hasSameDigits(s);
    expect(result).toBeTrue();
  });

  it('hasSameDigits should return false for s = "34789"', () => {
    const s = "34789";
    const result = hasSameDigits(s);
    expect(result).toBeFalse();
  });
});
