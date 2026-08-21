import { findKthSmallest } from "./solution";

describe("3116. Kth Smallest Amount With Single Denomination Combination:", () => {
  it("findKthSmallest should return 9 for coins = [3,6,9], k = 3", () => {
    const coins = [3, 6, 9];
    const k = 3;
    const result = findKthSmallest(coins, k);
    expect(result).toEqual(9);
  });

  it("findKthSmallest should return 12 for coins = [5,2], k = 7", () => {
    const coins = [5, 2];
    const k = 7;
    const result = findKthSmallest(coins, k);
    expect(result).toEqual(12);
  });
});
