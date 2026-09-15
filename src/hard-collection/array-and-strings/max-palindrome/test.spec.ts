import { maxPalindromes } from "./solution";

describe("2472. Maximum Number of Non-overlapping Palindrome Substrings:", () => {
  it('maxPalindromes should return 2 for s = "abaccdbbd", k = 3', () => {
    const s = "abaccdbbd";
    const k = 3;
    const result = maxPalindromes(s, k);
    expect(result).toEqual(2);
  });

  it('maxPalindromes should return 0 for s = "adbcda", k = 2', () => {
    const s = "adbcda";
    const k = 2;
    const result = maxPalindromes(s, k);
    expect(result).toEqual(0);
  });
});
