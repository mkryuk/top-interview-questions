import { maximumOddBinaryNumber } from "./solution";

describe("Maximum Odd Binary Number:", () => {
  it('maximumOddBinaryNumber should return "001" for s = "010"', () => {
    const s = "010";
    const result = maximumOddBinaryNumber(s);
    expect(result).toEqual("001");
  });

  it('maximumOddBinaryNumber should return "1001" for s = "0101"', () => {
    const s = "0101";
    const result = maximumOddBinaryNumber(s);
    expect(result).toEqual("1001");
  });
});
