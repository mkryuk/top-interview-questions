import { removeDuplicateLetters } from "./solution";

describe("Remove Duplicate Letters:", () => {
  it('removeDuplicateLetters should return "abc" for s = "bcabc"', () => {
    const s = "bcabc";
    const result = removeDuplicateLetters(s);
    expect(result).toEqual("abc");
  });

  it('removeDuplicateLetters should return "acdb" for s = "cbacdcbc"', () => {
    const s = "cbacdcbc";
    const result = removeDuplicateLetters(s);
    expect(result).toEqual("acdb");
  });

  it('removeDuplicateLetters should return "bca" for s = "bcbbca"', () => {
    const s = "bcbbca";
    const result = removeDuplicateLetters(s);
    expect(result).toEqual("bca");
  });

  it('removeDuplicateLetters should return "abc" for s = "bcbacabac"', () => {
    const s = "bcbacabac";
    const result = removeDuplicateLetters(s);
    expect(result).toEqual("abc");
  });

  it('removeDuplicateLetters should return "acb" for s = "bcbacacab"', () => {
    const s = "bcbacacab";
    const result = removeDuplicateLetters(s);
    expect(result).toEqual("acb");
  });
});
