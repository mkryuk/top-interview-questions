import { calculate } from "./solution-no-stack";

it('calculate should return 7 for s = "3+2*2"', () => {
  const s = "3+2*2";
  expect(calculate(s)).toBe(7);
});

it('calculate should return 1 for s = " 3/2 "', () => {
  const s = " 3/2 ";
  expect(calculate(s)).toBe(1);
});

it('calculate should return 5 for s = " 3+5 / 2 "', () => {
  const s = " 3+5 / 2 ";
  expect(calculate(s)).toBe(5);
});

it('calculate should return 57 for s = " 32+50 / 2 "', () => {
  const s = " 32+50 / 2 ";
  expect(calculate(s)).toBe(57);
});

it('calculate should return 15 for s = " 3+5*  2+3 -1"', () => {
  const s = " 3+5*  2+3 -1";
  expect(calculate(s)).toBe(15);
});

it('calculate should return -1 for s = "1-1-1"', () => {
  const s = "1-1-1";
  expect(calculate(s)).toBe(-1);
});

it('calculate should return -24 for s = "1*2-3/4+5*6-7*8+9/10"', () => {
  const s = "1*2-3/4+5*6-7*8+9/10";
  expect(calculate(s)).toBe(-24);
});
