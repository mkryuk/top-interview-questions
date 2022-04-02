import { coinChange } from "./solution";

it("coinChange should return 3 for coins = [1,2,5], amount = 11", () => {
  const coins = [1, 2, 5],
    amount = 11;
  const result = coinChange(coins, amount);
  expect(result).toBe(3);
});

it("coinChange should return -1 for coins = [2], amount = 3", () => {
  const coins = [2],
    amount = 3;
  const result = coinChange(coins, amount);
  expect(result).toBe(-1);
});

it("coinChange should return 0 for coins = [1], amount = 0", () => {
  const coins = [1],
    amount = 0;
  const result = coinChange(coins, amount);
  expect(result).toBe(0);
});

it("coinChange should return 1 for coins = [1], amount = 1", () => {
  const coins = [1],
    amount = 1;
  const result = coinChange(coins, amount);
  expect(result).toBe(1);
});

it("coinChange should return 2 for coins = [1,2], amount = 3", () => {
  const coins = [1, 2],
    amount = 3;
  const result = coinChange(coins, amount);
  expect(result).toBe(2);
});

it("coinChange should return 2 for coins = [1,2,3], amount = 4", () => {
  const coins = [1, 2, 3],
    amount = 4;
  const result = coinChange(coins, amount);
  expect(result).toBe(2);
});

it("coinChange should return 3 for coins = [1,2,5], amount = 11", () => {
  const coins = [1, 2, 5],
    amount = 11;
  const result = coinChange(coins, amount);
  expect(result).toBe(3);
});

it("coinChange should return 2 for coins = [1,2,5], amount = 10", () => {
  const coins = [1, 2, 5],
    amount = 10;
  const result = coinChange(coins, amount);
  expect(result).toBe(2);
});
