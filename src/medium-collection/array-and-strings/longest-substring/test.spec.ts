import { lengthOfLongestSubstring } from "./solution";

it('lengthOfLongestSubstring should return 3 for s = "abcabcbb"', function () {
  const s = "abcabcbb";
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});

it('lengthOfLongestSubstring should return 1 for s = "bbbbb"', function () {
  const s = "bbbbb";
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(1);
});

it('lengthOfLongestSubstring should return 3 for s = "pwwkew"', function () {
  const s = "pwwkew";
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});

it('lengthOfLongestSubstring should return 5 for s = "pwwkexwabcd"', function () {
  const s = "pwwkexwabcd";
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(8);
});

it('lengthOfLongestSubstring should return 3 for s = "dvdf"', function () {
  const s = "dvdf";
  const result = lengthOfLongestSubstring(s);
  expect(result).toEqual(3);
});
