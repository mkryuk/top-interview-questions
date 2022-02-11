import { checkInclusion } from "./solution";

it('checkInclusion should return true for s1 = "ab", s2 = "eidbaooo"', function () {
  const s1 = "ab",
    s2 = "eidbaooo";
  const result = checkInclusion(s1, s2);
  expect(result).toBeTrue();
});

it('checkInclusion should return true for s1 = "ab", s2 = "eidboaoo"', function () {
  const s1 = "ab",
    s2 = "eidboaoo";
  const result = checkInclusion(s1, s2);
  expect(result).toBeFalse();
});
