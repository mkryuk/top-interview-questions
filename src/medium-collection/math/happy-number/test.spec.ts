import { isHappy } from "./solution";

it("isHappy should return true for 19", () => {
  expect(isHappy(19)).toBe(true);
});

it("isHappy should return false for 2", () => {
  expect(isHappy(2)).toBe(false);
});

it("isHappy should return true for 32", () => {
  expect(isHappy(32)).toBe(true);
});

it("isHappy should return true for 7", () => {
  expect(isHappy(7)).toBe(true);
});

it("isHappy should return false for 116", () => {
  expect(isHappy(116)).toBe(false);
});
