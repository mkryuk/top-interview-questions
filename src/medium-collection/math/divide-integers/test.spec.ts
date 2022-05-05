import { divide } from "./solution";

it("divide should return 3 for dividend = 10, divisor = 3", () => {
  expect(divide(10, 3)).toBe(3);
});

it("divide should return -2 for dividend = 7, divisor = -3", () => {
  expect(divide(7, -3)).toBe(-2);
});
