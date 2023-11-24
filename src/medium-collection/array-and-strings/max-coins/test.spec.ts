import { maxCoins } from "./solution";

describe("Maximum Number of Coins You Can Get:", () => {
  it("maxCoins should return 9 for piles = [2,4,1,2,7,8]", () => {
    const piles = [2, 4, 1, 2, 7, 8];
    const result = maxCoins(piles);
    expect(result).toEqual(9);
  });

  it("maxCoins should return 4 for piles = [2,4,5]", () => {
    const piles = [2, 4, 5];
    const result = maxCoins(piles);
    expect(result).toEqual(4);
  });

  it("maxCoins should return 18 for piles = [9,8,7,6,5,1,2,3,4]", () => {
    const piles = [9, 8, 7, 6, 5, 1, 2, 3, 4];
    const result = maxCoins(piles);
    expect(result).toEqual(18);
  });
});
