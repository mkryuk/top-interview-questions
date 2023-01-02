import { detectCapitalUse } from "./solution";

it('detectCapitalUse should return true for word = "USA"', () => {
  const word = "USA";
  const result = detectCapitalUse(word);
  expect(result).toBeTrue();
});

it('detectCapitalUse should return false for word = "FlaG"', () => {
  const word = "FlaG";
  const result = detectCapitalUse(word);
  expect(result).toBeTrue();
});
