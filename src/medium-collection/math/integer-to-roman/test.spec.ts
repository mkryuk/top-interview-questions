import { intToRoman } from "./solution";

it('intToRoman should return "III" for num = 3', () => {
  const num = 3;
  const result = intToRoman(num);
  expect(result).toEqual("III");
});

it('intToRoman should return "LVIII" for num = 58', () => {
  const num = 58;
  const result = intToRoman(num);
  expect(result).toEqual("LVIII");
});

it('intToRoman should return "MCMXCIV" for num = 1994', () => {
  const num = 1994;
  const result = intToRoman(num);
  expect(result).toEqual("MCMXCIV");
});
