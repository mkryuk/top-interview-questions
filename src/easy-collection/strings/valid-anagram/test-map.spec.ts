import { isAnagram } from "./solution-map";

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

it('isAnagram should return false for s = "rat", t = "tarz"', () => {
  const s = "rat",
    t = "tarz";
  const result = isAnagram(s, t);
  expect(result).toBe(false);
});
