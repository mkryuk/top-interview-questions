import { numberOfSubstrings } from "./solution";

describe("Number of Substrings Containing All Three Characters", () => {
  it('numberOfSubstrings should return 10 for s = "abcabc"', () => {
    const s = "abcabc";
    const result = numberOfSubstrings(s);
    expect(result).toEqual(10);
  });

  it('numberOfSubstrings should return 3 for s = "aaacb"', () => {
    const s = "aaacb";
    const result = numberOfSubstrings(s);
    expect(result).toEqual(3);
  });

  it('numberOfSubstrings should return 1 for s = "abc"', () => {
    const s = "abc";
    const result = numberOfSubstrings(s);
    expect(result).toEqual(1);
  });
});
