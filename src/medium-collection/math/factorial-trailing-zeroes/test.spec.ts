import { trailingZeroes } from "./solution";

it("trailingZeroes should return 0 for n = 3", () => {
  expect(trailingZeroes(3)).toBe(0);
});

it("trailingZeroes should return 1 for n = 5", () => {
  expect(trailingZeroes(5)).toBe(1);
});

it("trailingZeroes should return 0 for n = 0", () => {
  expect(trailingZeroes(0)).toBe(0);
});

it("trailingZeroes should return 2 for n = 10", () => {
  expect(trailingZeroes(10)).toBe(2);
});
