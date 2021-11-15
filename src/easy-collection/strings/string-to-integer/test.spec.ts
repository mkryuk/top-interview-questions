import { myAtoi } from "./solution";

it('myAtoi should return 42 for s = "42"', () => {
  const s = "42";
  const result = myAtoi(s);
  expect(result).toBe(42);
});

it('myAtoi should return -42 for s = "   -42"', () => {
  const s = "   -42";
  const result = myAtoi(s);
  expect(result).toBe(-42);
});

it('myAtoi should return 4193 for s = "4193 with words"', () => {
  const s = "4193 with words";
  const result = myAtoi(s);
  expect(result).toBe(4193);
});

it('myAtoi should return 0 for s = "words and 987"', () => {
  const s = "words and 987";
  const result = myAtoi(s);
  expect(result).toBe(0);
});

it('myAtoi should return -4201 for s = "  -004201 abc"', () => {
  const s = "  -004201 abc";
  const result = myAtoi(s);
  expect(result).toBe(-4201);
});

it('myAtoi should return -2147483648 s = "-91283472332"', () => {
  const s = "-91283472332";
  const result = myAtoi(s);
  expect(result).toBe(-2147483648);
});

it('myAtoi should return 2147483647 s = "91283472332"', () => {
  const s = "91283472332";
  const result = myAtoi(s);
  expect(result).toBe(2147483647);
});
