import { maxIceCream } from "./solution";

describe("1833. Maximum Ice Cream Bars:", () => {
  it("maxIceCream should return 4 for costs = [1,3,2,4,1], coins = 7", () => {
    const costs = [1, 3, 2, 4, 1];
    const coins = 7;
    const result = maxIceCream(costs, coins);
    expect(result).toEqual(4);
  });

  it("maxIceCream should return 0 for costs = [10,6,8,7,7,8], coins = 5", () => {
    const costs = [10, 6, 8, 7, 7, 8];
    const coins = 5;
    const result = maxIceCream(costs, coins);
    expect(result).toEqual(0);
  });

  it("maxIceCream should return 6 for costs = [1,6,3,1,2,5], coins = 20", () => {
    const costs = [1, 6, 3, 1, 2, 5];
    const coins = 20;
    const result = maxIceCream(costs, coins);
    expect(result).toEqual(6);
  });
});
