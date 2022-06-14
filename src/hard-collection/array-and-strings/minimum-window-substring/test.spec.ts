import { minWindow } from "./solution";

it('minWindow should return "BANC" s = "ADOBECODEBANC", t = "ABC"', () => {
  const s = "ADOBECODEBANC";
  const t = "ABC";
  const result = minWindow(s, t);
});

it('minWindow should return "a" s = "a", t = "a"', () => {
  const s = "a";
  const t = "a";
  const result = minWindow(s, t);
});

it('minWindow should return "" s = "a", t = "aa"', () => {
  const s = "a";
  const t = "aa";
  const result = minWindow(s, t);
});
