import { makeFancyString } from "./solution";

describe("Delete Characters to Make Fancy String", () => {
  it('makeFancyString should return "leetcode" for s = "leeetcode"', () => {
    const s = "leeetcode";
    const result = makeFancyString(s);
    expect(result).toEqual("leetcode");
  });

  it('makeFancyString should return "aabaa" for s = "aaabaaaa"', () => {
    const s = "aaabaaaa";
    const result = makeFancyString(s);
    expect(result).toEqual("aabaa");
  });

  it('makeFancyString should return "aab" for s = "aab"', () => {
    const s = "aab";
    const result = makeFancyString(s);
    expect(result).toEqual("aab");
  });
});
