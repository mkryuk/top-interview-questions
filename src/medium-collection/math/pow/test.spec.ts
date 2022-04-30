import { myPow } from "./solution";

it("myPow should return 1024.00000 for x = 2.00000, n = 10", () => {
  expect(myPow(2.0, 10)).toBe(1024.0);
});

it("myPow should return 9.26100 for x = 2.10000, n = 3", () => {
  expect(myPow(2.1, 3)).toBe(9.261);
});

it("myPow should return 0.25000 for x = 2.00000, n = -2", () => {
  expect(myPow(2.0, -2)).toBe(0.25);
});
