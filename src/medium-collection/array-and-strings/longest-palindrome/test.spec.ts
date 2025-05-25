import { longestPalindrome } from "./solution";

describe("Longest Palindrome by Concatenating Two Letter Words", () => {
  it('longestPalindrome should return 6 for words = ["lc","cl","gg"]', () => {
    const words = ["lc", "cl", "gg"];
    const result = longestPalindrome(words);
    expect(result).toEqual(6);
  });

  it('longestPalindrome should return 8 for words = ["ab","ty","yt","lc","cl","ab"]', () => {
    const words = ["ab", "ty", "yt", "lc", "cl", "ab"];
    const result = longestPalindrome(words);
    expect(result).toEqual(8);
  });

  it('longestPalindrome should return 2 for words = ["cc","ll","xx"]', () => {
    const words = ["cc", "ll", "xx"];
    const result = longestPalindrome(words);
    expect(result).toEqual(2);
  });
});
