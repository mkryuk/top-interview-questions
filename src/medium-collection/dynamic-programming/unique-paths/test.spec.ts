import { uniquePaths } from "./solution";

it("uniquePaths should return 28 for m = 3, n = 7", function () {
  expect(uniquePaths(3, 7)).toBe(28);
});

it("uniquePaths should return 3 for m = 3, n = 2", function () {
  expect(uniquePaths(3, 2)).toBe(3);
});

it("uniquePaths should return 1 for m = 1, n = 1", function () {
  expect(uniquePaths(1, 1)).toBe(1);
});

it("uniquePaths should return 0 for m = 0, n = 0", function () {
  expect(uniquePaths(0, 0)).toBe(0);
});
