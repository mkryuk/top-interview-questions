import { digitCount } from "./solution";

describe("Check if Number Has Equal Digit Count and Digit Value:", () => {
  it('digitCount should return true for num = "1210"', () => {
    const num = "1210";
    const result = digitCount(num);
    expect(result).toBeTrue();
  });

  it('digitCount should return true for num = "030"', () => {
    const num = "030";
    const result = digitCount(num);
    expect(result).toBeFalse();
  });
});
