import { maximumAmount } from "./solution";

describe("Maximum Amount of Money Robot Can Earn", () => {
  it("maximumAmount should return 8 for coins = [[0,1,-1],[1,-2,3],[2,-3,4]]", () => {
    const coins = [
      [0, 1, -1],
      [1, -2, 3],
      [2, -3, 4],
    ];
    const result = maximumAmount(coins);
    expect(result).toEqual(8);
  });

  it("maximumAmount should return 40 for coins = [[10,10,10],[10,10,10]]", () => {
    const coins = [
      [10, 10, 10],
      [10, 10, 10],
    ];
    const result = maximumAmount(coins);
    expect(result).toEqual(40);
  });
});
