import { countPrimes } from "./solution";

it("countPrimes should return 4 for n = 10", () => {
  const n = 10;
  const result = countPrimes(n);
  expect(result).toEqual(4);
});

it("countPrimes should return 0 for n = 0", () => {
  const n = 0;
  const result = countPrimes(n);
  expect(result).toEqual(0);
});

it("countPrimes should return 0 for n = 1", () => {
  const n = 1;
  const result = countPrimes(n);
  expect(result).toEqual(0);
});

it("countPrimes should return 1 for n = 2", () => {
  const n = 2;
  const result = countPrimes(n);
  expect(result).toEqual(1);
});
