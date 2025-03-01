import { shortestCommonSupersequence } from "./solution";

describe("Shortest Common Supersequence", () => {
  it('shortestCommonSupersequence should return "cabac" for str1 = "abac", str2 = "cab"', () => {
    const str1 = "abac";
    const str2 = "cab";
    const result = shortestCommonSupersequence(str1, str2);
    expect(result).toEqual("cabac");
  });

  it('shortestCommonSupersequence should return "aaaaaaaa" for str1 = "aaaaaaaa", str2 = "aaaaaaaa"', () => {
    const str1 = "aaaaaaaa";
    const str2 = "aaaaaaaa";
    const result = shortestCommonSupersequence(str1, str2);
    expect(result).toEqual("aaaaaaaa");
  });
});
