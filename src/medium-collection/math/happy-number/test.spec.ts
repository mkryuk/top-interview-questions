import { isHappy } from "./solution";

it("isHappy should return true for 19", () => {
  expect(isHappy(19)).toBe(true);
});

it("isHappy should return false for 2", () => {
  expect(isHappy(2)).toBe(false);
});
