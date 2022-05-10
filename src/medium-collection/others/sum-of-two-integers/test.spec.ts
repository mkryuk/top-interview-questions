import { getSum } from "./solution";

it("getSum should return 3 for a = 1, b = 2", () => {
  expect(getSum(1, 2)).toBe(3);
});

it("getSum should return 5 for a = 2, b = 3", () => {
  expect(getSum(2, 3)).toBe(5);
});

it("getSum should return -3 for a = -1, b = -2", () => {
  expect(getSum(-1, -2)).toBe(-3);
});

it("getSum should return 1 for a = -1, b = 2", () => {
  expect(getSum(-1, 2)).toBe(1);
});

it("getSum should return 0 for a = 0, b = 0", () => {
  expect(getSum(0, 0)).toBe(0);
});
