import { maximumProfit } from "./solution";

describe("3573. Best Time to Buy and Sell Stock V:", () => {
  it("maximumProfit should return 14 for prices = [1,7,9,8,2], k = 2", () => {
    const prices = [1, 7, 9, 8, 2];
    const k = 2;
    const result = maximumProfit(prices, k);
    expect(result).toEqual(14);
  });

  it("maximumProfit should return 36 for prices = [12,16,19,19,8,1,19,13,9], k = 3", () => {
    const prices = [12, 16, 19, 19, 8, 1, 19, 13, 9];
    const k = 3;
    const result = maximumProfit(prices, k);
    expect(result).toEqual(36);
  });
});
