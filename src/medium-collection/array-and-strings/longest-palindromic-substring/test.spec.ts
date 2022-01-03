import { longestPalindrome } from "./solution";

it('longestPalindrome should return "bab" for s = "babad"', function () {
  const s = "babad";
  const result = longestPalindrome(s);
  expect(result).toEqual("bab");
});

it('longestPalindrome should return "bb" for s = "cbbd"', function () {
  const s = "cbbd";
  const result = longestPalindrome(s);
  expect(result).toEqual("bb");
});

it('longestPalindrome should return "abbba" for s = "abbbacx"', function () {
  const s = "abbbacx";
  const result = longestPalindrome(s);
  expect(result).toEqual("abbba");
});

it('longestPalindrome should return "bbabb" for s = "bbbabbcx"', function () {
  const s = "bbbabbcx";
  const result = longestPalindrome(s);
  expect(result).toEqual("bbabb");
});

it('longestPalindrome should return "a" for s = "a"', function () {
  const s = "a";
  const result = longestPalindrome(s);
  expect(result).toEqual("a");
});
