import { tribonacci } from "./solution";

it("tribonacci should return 4 for n = 4", () => {
  const n = 4;
  const result = tribonacci(n);
  expect(result).toEqual(4);
});

it("tribonacci should return 1389537 for n = 25", () => {
  const n = 25;
  const result = tribonacci(n);
  expect(result).toEqual(1389537);
});
