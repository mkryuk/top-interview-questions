import { tribonacci } from "./solution";

it("tribonacci should return 4 for n = 4", () => {
  const n = 4;
  const result = tribonacci(n);
  expect(result).toEqual(4);
});

it("tribonacci should return 7 for n = 5", () => {
  const n = 5;
  const result = tribonacci(n);
  expect(result).toEqual(7);
});

it("tribonacci should return 13 for n = 6", () => {
  const n = 6;
  const result = tribonacci(n);
  expect(result).toEqual(13);
});

it("tribonacci should return 24 for n = 7", () => {
  const n = 7;
  const result = tribonacci(n);
  expect(result).toEqual(24);
});

it("tribonacci should return 1389537 for n = 25", () => {
  const n = 25;
  const result = tribonacci(n);
  expect(result).toEqual(1389537);
});
