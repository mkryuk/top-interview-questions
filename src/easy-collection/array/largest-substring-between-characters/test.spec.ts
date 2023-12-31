import { maxLengthBetweenEqualCharacters } from "./solution";

describe("Largest Substring Between Two Equal Characters:", () => {
  it('maxLengthBetweenEqualCharacters should return 0 for s = "aa"', () => {
    const s = "aa";
    const result = maxLengthBetweenEqualCharacters(s);
    expect(result).toEqual(0);
  });

  it('maxLengthBetweenEqualCharacters should return 2 for s = "abca"', () => {
    const s = "abca";
    const result = maxLengthBetweenEqualCharacters(s);
    expect(result).toEqual(2);
  });

  it('maxLengthBetweenEqualCharacters should return -1 for s = "cbzxy"', () => {
    const s = "cbzxy";
    const result = maxLengthBetweenEqualCharacters(s);
    expect(result).toEqual(-1);
  });
});
