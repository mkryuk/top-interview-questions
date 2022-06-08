import { lengthOfLongestSubstringKDistinct } from "./solution";

it('lengthOfLongestSubstringKDistinct should return 3 for s = "eceba", k = 2', () => {
  const s = "eceba";
  const k = 2;
  expect(lengthOfLongestSubstringKDistinct(s, k)).toBe(3);
});

it('lengthOfLongestSubstringKDistinct should return 5 for s = "aaabb", k = 3', () => {
  const s = "aaabb";
  const k = 3;
  expect(lengthOfLongestSubstringKDistinct(s, k)).toBe(5);
});

it('lengthOfLongestSubstringKDistinct should return 5 for s = "aaabb", k = 2', () => {
  const s = "aaabb";
  const k = 2;
  expect(lengthOfLongestSubstringKDistinct(s, k)).toBe(5);
});

it('lengthOfLongestSubstringKDistinct should return 2 for s = "aa", k = 1', () => {
  const s = "aa";
  const k = 1;
  expect(lengthOfLongestSubstringKDistinct(s, k)).toBe(2);
});
