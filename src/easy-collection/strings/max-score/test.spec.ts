import { maxScore } from "./solution";

describe("Maximum Score After Splitting a String:", () => {
  it('maxScore should return 5 for s = "011101"', () => {
    const s = "011101";
    const result = maxScore(s);
    expect(result).toEqual(5);
  });

  it('maxScore should return 5 for s = "00111"', () => {
    const s = "00111";
    const result = maxScore(s);
    expect(result).toEqual(5);
  });

  it('maxScore should return 3 for s = "1111"', () => {
    const s = "1111";
    const result = maxScore(s);
    expect(result).toEqual(3);
  });

  it('maxScore should return 1 for s = "00"', () => {
    const s = "00";
    const result = maxScore(s);
    expect(result).toEqual(1);
  });
});
