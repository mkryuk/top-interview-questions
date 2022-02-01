import { letterCombinations } from "./solution";

it('letterCombinations should return ["ad","ae","af","bd","be","bf","cd","ce","cf"] for digits = "23"', () => {
  const digits = "23";
  const result = letterCombinations(digits);
  expect(result).toEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

it('letterCombinations should return [] for digits = ""', () => {
  const digits = "";
  const result = letterCombinations(digits);
  expect(result).toEqual([]);
});

it('letterCombinations should return ["a","b","c"] for digits = "2"', () => {
  const digits = "2";
  const result = letterCombinations(digits);
  expect(result).toEqual(["a", "b", "c"]);
});
