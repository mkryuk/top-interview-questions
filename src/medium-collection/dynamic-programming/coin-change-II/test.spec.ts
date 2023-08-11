import { change } from "./solution";

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
});
