import { generateString } from "./solution";

describe("Lexicographically Smallest Generated String", () => {
  it('generateString should return "ababa" for str1 = "TFTF", str2 = "ab"', () => {
    const str1 = "TFTF";
    const str2 = "ab";
    const result = generateString(str1, str2);
    expect(result).toBe("ababa");
  });

  it('generateString should return "" for str1 = "TFTF", str2 = "abc"', () => {
    const str1 = "TFTF";
    const str2 = "abc";
    const result = generateString(str1, str2);
    expect(result).toBe("");
  });

  it('generateString should return "a" for str1 = "F", str2 = "d"', () => {
    const str1 = "F";
    const str2 = "d";
    const result = generateString(str1, str2);
    expect(result).toBe("a");
  });
});
