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

  it("maximumCandies should return 2 for candies = [2,2,3,4,5], k = 5", () => {
    const candies = [2, 2, 3, 4, 5];
    const k = 5;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(2);
  });

  it("maximumCandies should return 4 for candies = [2,2,3,4,8], k = 3", () => {
    const candies = [2, 2, 3, 4, 8];
    const k = 3;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(4);
  });
});
