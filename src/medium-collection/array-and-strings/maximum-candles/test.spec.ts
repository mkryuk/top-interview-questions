import { maximumCandies } from "./solution";

describe("Maximum Candies Allocated to K Children:", () => {
  it("maximumCandies should return 5 for candies = [5,8,6], k = 3", () => {
    const candies = [5, 8, 6];
    const k = 3;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(5);
  });

  it("maximumCandies should return 0 for candies = [2,5], k = 11", () => {
    const candies = [2, 5];
    const k = 11;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(5);
  });
});
