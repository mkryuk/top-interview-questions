import { numDecodings } from "./solution-iterative-opt";

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

it('numDecodings should return 5 for s = "12242"', () => {
  const s = "12242";
  const result = numDecodings(s);
  expect(result).toEqual(5);
});

it('numDecodings should return 2 for s = "11106"', () => {
  const s = "11106";
  const result = numDecodings(s);
  expect(result).toEqual(2);
});

it('numDecodings should return 0 for s = "11306"', () => {
  const s = "11306";
  const result = numDecodings(s);
  expect(result).toEqual(0);
});

it('numDecodings should return 8 for s = "21212"', () => {
  const s = "21212";
  const result = numDecodings(s);
  expect(result).toEqual(8);
});

it('numDecodings should return 1 for s = "777"', () => {
  const s = "777";
  const result = numDecodings(s);
  expect(result).toEqual(1);
});
