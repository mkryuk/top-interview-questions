import { maxProfit } from "./solution";

describe("3652. Best Time to Buy and Sell Stock using Strategy", () => {
  it("maxProfit should return 10 for prices = [4,2,8], strategy = [-1,0,1], k = 2", () => {
    const prices = [4, 2, 8];
    const strategy = [-1, 0, 1];
    const k = 2;
    const result = maxProfit(prices, strategy, k);
    expect(result).toEqual(10);
  });

  it("maxProfit should return 9 for prices = [5,4,3], strategy = [1,1,0], k = 2", () => {
    const prices = [5, 4, 3];
    const strategy = [1, 1, 0];
    const k = 2;
    const result = maxProfit(prices, strategy, k);
    expect(result).toEqual(9);
  });
});
