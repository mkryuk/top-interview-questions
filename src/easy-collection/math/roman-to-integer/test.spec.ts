import { romanToInt } from "./solution";

it('romanToInt should return 3 for s = "III"', function () {
  const s = "III";
  const result = romanToInt(s);
  expect(result).toEqual(3);
});

it('romanToInt should return 4 for s = "IV"', function () {
  const s = "IV";
  const result = romanToInt(s);
  expect(result).toEqual(3);
});

it('romanToInt should return 58 for s = "LVIII"', function () {
  const s = "LVIII";
  const result = romanToInt(s);
  expect(result).toEqual(58);
});

it('romanToInt should return 1994 for s = "MCMXCIV"', function () {
  const s = "MCMXCIV";
  const result = romanToInt(s);
  expect(result).toEqual(1994);
});
