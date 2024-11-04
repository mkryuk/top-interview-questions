import { compressedString } from "./solution";

describe("String Compression III", () => {
  it('compressedString should return "1a1b1c1d1e" for word = "abcde"', () => {
    const word = "abcde";
    const result = compressedString(word);
    expect(result).toEqual("1a1b1c1d1e");
  });

  it('compressedString should return "9a5a2b" for word = "aaaaaaaaaaaaaabb"', () => {
    const word = "aaaaaaaaaaaaaabb";
    const result = compressedString(word);
    expect(result).toEqual("9a5a2b");
  });
});
