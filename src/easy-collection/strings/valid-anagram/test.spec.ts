import { isAnagram } from "./solution";

it('isAnagram should return true for s = "anagram", t = "nagaram"', () => {
  const s = "anagram",
    t = "nagaram";
  const result = isAnagram(s, t);
  expect(result).toBe(true);
});

it('isAnagram should return false for s = "rat", t = "car"', () => {
  const s = "rat",
    t = "car";
  const result = isAnagram(s, t);
  expect(result).toBe(false);
});
