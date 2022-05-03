import { mySqrt } from "./solution";

it("mySqrt should return 2 for x = 4", () => {
  expect(mySqrt(4)).toBe(2);
});

it("mySqrt should return 3 for x = 9", () => {
  expect(mySqrt(9)).toBe(3);
});

it("mySqrt should return 3 for x = 15", () => {
  expect(mySqrt(15)).toBe(3);
});

it("mySqrt should return 4 for x = 16", () => {
  expect(mySqrt(16)).toBe(4);
});

it("mySqrt should return 0 for x = 0", () => {
  expect(mySqrt(0)).toBe(0);
});
