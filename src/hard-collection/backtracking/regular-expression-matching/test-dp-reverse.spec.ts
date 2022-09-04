import { isMatch } from "./solution-dp-reverse";

it('isMatch should return false for s = "aa", p = "a"', () => {
  const s = "aa";
  const p = "a";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});

it('isMatch should return true for s = "aa", p = "a*"', () => {
  const s = "aa";
  const p = "a*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return true for s = "ab", p = ".*"', () => {
  const s = "ab";
  const p = ".*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return true for s = "aab", p = "c*a*b"', () => {
  const s = "aab";
  const p = "c*a*b";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return true for s = "aabaac", p = "a.ba*cd*"', () => {
  const s = "aabaac";
  const p = "a.ba*cd*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return false for s = "abcabcd", p = "a*b*c*d*"', () => {
  const s = "abcabcd";
  const p = "a*b*c*d*";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});

it('isMatch should return true for s = "abbaccd", p = "a.b.c.d.*"', () => {
  const s = "abbaccd";
  const p = "a.b.c.d.*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return false for s = "ab", p = ".*c"', () => {
  const s = "ab";
  const p = ".*c";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});
