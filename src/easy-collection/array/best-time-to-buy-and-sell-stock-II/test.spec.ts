import { maxProfit } from "./solution";

it("should find profit [7,1,5,3,6,4]", () => {
  let prices = [7, 1, 5, 3, 6, 4];
  let profit = maxProfit(prices);
  expect(profit).toBe(7);
});

it("should find profit [1,2,3,4,5]", () => {
  let prices = [1, 2, 3, 4, 5];
  let profit = maxProfit(prices);
  expect(profit).toBe(4);
});

it("should find profit [7,6,4,3,1]", () => {
  let prices = [7, 6, 4, 3, 1];
  let profit = maxProfit(prices);
  expect(profit).toBe(0);
});
