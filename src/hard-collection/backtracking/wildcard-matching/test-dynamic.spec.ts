import { isMatch } from "./solution-dynamic";

it('isMatch should return false for s = "aa", p = "a"', () => {
  const s = "aa";
  const p = "a";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});

it('isMatch should return true for s = "aa", p = "*"', () => {
  const s = "aa";
  const p = "*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return false for s = "cb", p = "?a"', () => {
  const s = "cb";
  const p = "?a";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});

it('isMatch should return true for s = "baaaabbb", p = "b?*b*"', () => {
  const s = "baaaabbb";
  const p = "b?*b*";
  const result = isMatch(s, p);
  expect(result).toBeTrue();
});

it('isMatch should return false for s = "baaaabbb", p = "b?*c*"', () => {
  const s = "baaaabbb";
  const p = "b?*c*";
  const result = isMatch(s, p);
  expect(result).toBeFalse();
});
