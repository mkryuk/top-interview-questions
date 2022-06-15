import { minWindow } from "./solution";

it('minWindow should return "BANC" s = "ADOBECODEBANC", t = "ABC"', () => {
  const s = "ADOBECODEBANC";
  const t = "ABC";
  const result = minWindow(s, t);
  expect(result).toBe("BANC");
});

it('minWindow should return "ABANC" s = "ADOBECODEABANC", t = "ABCA"', () => {
  const s = "ADOBECODEABANC";
  const t = "ABCA";
  const result = minWindow(s, t);
  expect(result).toBe("ABANC");
});

it('minWindow should return "ABANC" s = "ADAABAOECODEABANC", t = "ABCA"', () => {
  const s = "ADAABAOECODEABANC";
  const t = "ABCA";
  const result = minWindow(s, t);
  expect(result).toBe("ABANC");
});

it('minWindow should return "a" s = "a", t = "a"', () => {
  const s = "a";
  const t = "a";
  const result = minWindow(s, t);
  expect(result).toBe("a");
});

it('minWindow should return "" s = "a", t = "aa"', () => {
  const s = "a";
  const t = "aa";
  const result = minWindow(s, t);
  expect(result).toBe("");
});
