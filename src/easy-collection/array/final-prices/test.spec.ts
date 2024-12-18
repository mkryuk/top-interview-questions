import { finalPrices } from "./solution";

describe("Final Prices With a Special Discount in a Shop", () => {
  it("finalPrices should return [4,2,4,2,3] for prices = [8,4,6,2,3]", () => {
    const prices = [8, 4, 6, 2, 3];
    const result = finalPrices(prices);
    expect(result).toEqual([4, 2, 4, 2, 3]);
  });

  it("finalPrices should return [1,2,3,4,5] for prices = [1,2,3,4,5]", () => {
    const prices = [1, 2, 3, 4, 5];
    const result = finalPrices(prices);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("finalPrices should return [9,0,1,6] for prices = [10,1,1,6]", () => {
    const prices = [10, 1, 1, 6];
    const result = finalPrices(prices);
    expect(result).toEqual([9, 0, 1, 6]);
  });
});
