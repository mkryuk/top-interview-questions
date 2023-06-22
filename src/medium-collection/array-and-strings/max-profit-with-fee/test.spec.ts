import { maxProfit } from "./solution";

describe("Best Time to Buy and Sell Stock with Transaction Fee:", () => {
  it("maxProfit should return 8 for prices = [1,3,2,8,4,9], fee = 2", () => {
    const prices = [1, 3, 2, 8, 4, 9];
    const fee = 2;
    const result = maxProfit(prices, fee);
    expect(result).toEqual(8);
  });

  it("maxProfit should return 6 for prices = [1,3,7,5,10,3], fee = 3", () => {
    const prices = [1, 3, 7, 5, 10, 3];
    const fee = 3;
    const result = maxProfit(prices, fee);
    expect(result).toEqual(6);
  });
});
