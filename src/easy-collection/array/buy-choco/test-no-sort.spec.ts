import { buyChoco } from "./solution-no-sort";

describe("Buy Two Chocolates:", () => {
  it("buyChoco should return 0 for prices = [1,2,2], money = 3", () => {
    const prices = [1, 2, 2];
    const money = 3;
    const result = buyChoco(prices, money);
    expect(result).toEqual(0);
  });

  it("buyChoco should return 3 for prices = [3,2,3], money = 3", () => {
    const prices = [3, 2, 3];
    const money = 3;
    const result = buyChoco(prices, money);
    expect(result).toEqual(3);
  });
});
