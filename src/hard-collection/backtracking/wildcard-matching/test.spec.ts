import { isMatch } from "./solution";

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
  expect(result).toBeTrue();
});
