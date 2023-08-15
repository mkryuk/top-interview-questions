import { change } from "./solution-bottom-up-optimized";

describe("Coin Change II:", () => {
  it("change should return 4 for amount = 5, coins = [1,2,5]", () => {
    const amount = 5;
    const coins = [1, 2, 5];
    const result = change(amount, coins);
    expect(result).toEqual(4);
  });

  it("change should return 0 for amount = 3, coins = [2]", () => {
    const amount = 3;
    const coins = [2];
    const result = change(amount, coins);
    expect(result).toEqual(0);
  });

  it("change should return 1 for amount = 10, coins = [10]", () => {
    const amount = 10;
    const coins = [10];
    const result = change(amount, coins);
    expect(result).toEqual(1);
  });

  it("change should return 35502874 for amount = 500, coins = [3,5,7,8,9,10,11]", () => {
    const amount = 500;
    const coins = [3, 5, 7, 8, 9, 10, 11];
    const result = change(amount, coins);
    expect(result).toEqual(35502874);
  });
});
