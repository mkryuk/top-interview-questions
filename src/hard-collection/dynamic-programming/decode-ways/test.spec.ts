import { numDecodings } from "./solution";

it('numDecodings should return 2 for s = "12"', () => {
  const s = "12";
  const result = numDecodings(s);
  expect(result).toEqual(2);
});

it('numDecodings should return 3 for s = "226"', () => {
  const s = "226";
  const result = numDecodings(s);
  expect(result).toEqual(3);
});

it('numDecodings should return 0 for s = "06"', () => {
  const s = "06";
  const result = numDecodings(s);
  expect(result).toEqual(0);
});
