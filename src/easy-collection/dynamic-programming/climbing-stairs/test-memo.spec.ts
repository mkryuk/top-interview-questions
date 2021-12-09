import { climbStairs } from "./solution-memo";

it("climbStairs should return 2 for n = 2", () => {
  const n = 2;
  const result = climbStairs(n);
  expect(result).toBe(2);
});

it("climbStairs should return 3 for n = 3", () => {
  const n = 3;
  const result = climbStairs(n);
  expect(result).toBe(3);
});

it("climbStairs should return 5 for n = 4", () => {
  const n = 4;
  const result = climbStairs(n);
  expect(result).toBe(5);
});

it("climbStairs should return 987 for n = 15", () => {
  const n = 15;
  const result = climbStairs(n);
  expect(result).toBe(987);
});
