import { calculate } from "./solution";

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
