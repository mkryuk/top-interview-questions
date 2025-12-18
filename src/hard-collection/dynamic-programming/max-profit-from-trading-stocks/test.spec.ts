import { maxProfit } from "./solution";

describe("3562. Maximum Profit from Trading Stocks with Discounts", () => {
  it("maxProfit should return 5 for n = 2, present = [1,2], future = [4,3], hierarchy = [[1,2]], budget = 3", () => {
    const n = 2;
    const present = [1, 2];
    const future = [4, 3];
    const hierarchy = [[1, 2]];
    const budget = 3;
    const result = maxProfit(n, present, future, hierarchy, budget);
    expect(result).toEqual(5);
  });

  it("maxProfit should return 4 for n = 2, present = [3,4], future = [5,8], hierarchy = [[1,2]], budget = 4", () => {
    const n = 2;
    const present = [3, 4];
    const future = [5, 8];
    const hierarchy = [[1, 2]];
    const budget = 4;
    const result = maxProfit(n, present, future, hierarchy, budget);
    expect(result).toEqual(4);
  });

  it("maxProfit should return 10 for n = 3, present = [4,6,8], future = [7,9,11], hierarchy = [[1,2],[1,3]], budget = 10", () => {
    const n = 3;
    const present = [4, 6, 8];
    const future = [7, 9, 11];
    const hierarchy = [
      [1, 2],
      [1, 3],
    ];
    const budget = 10;
    const result = maxProfit(n, present, future, hierarchy, budget);
    expect(result).toEqual(10);
  });

  it("maxProfit should return 12 for n = 3, present = [5,2,3], future = [8,5,6], hierarchy = [[1,2],[2,3]], budget = 7", () => {
    const n = 3;
    const present = [5, 2, 3];
    const future = [8, 5, 6];
    const hierarchy = [
      [1, 2],
      [2, 3],
    ];
    const budget = 7;
    const result = maxProfit(n, present, future, hierarchy, budget);
    expect(result).toEqual(12);
  });
});
