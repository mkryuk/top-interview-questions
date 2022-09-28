import { maxProfit } from "./solution";

it("maxProfit should return 3 for prices = [1,2,3,0,2]", () => {
  const prices = [1, 2, 3, 0, 2];
  const result = maxProfit(prices);
  expect(result).toBe(3);
});

it("maxProfit should return 0 for prices = prices = [1]", () => {
  const prices = [1];
  const result = maxProfit(prices);
  expect(result).toBe(0);
});

it("maxProfit should return 4 for prices = prices = [1,2,3,4,5]", () => {
  const prices = [1, 2, 3, 4, 5];
  const result = maxProfit(prices);
  expect(result).toBe(4);
});

it("maxProfit should return 4 for prices = prices = [1,2,0,3,4]", () => {
  const prices = [1, 2, 0, 3, 4];
  const result = maxProfit(prices);
  expect(result).toBe(4);
});
