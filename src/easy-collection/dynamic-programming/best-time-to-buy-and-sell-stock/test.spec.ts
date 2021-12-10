import { maxProfit } from "../../array/best-time-to-buy-and-sell-stock-II/solution";

it("maxProfit should return 5 for prices = [7,1,5,3,6,4]", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const result = maxProfit(prices);
  expect(result).toEqual(5);
});

it("maxProfit should return 8 for prices = [1,7,1,8,1,9]", () => {
  const prices = [1, 7, 1, 8, 1, 9];
  const result = maxProfit(prices);
  expect(result).toEqual(8);
});

it("maxProfit should return 0 for prices = [7,6,4,3,1]", () => {
  const prices = [7, 6, 4, 3, 1];
  const result = maxProfit(prices);
  expect(result).toEqual(0);
});
