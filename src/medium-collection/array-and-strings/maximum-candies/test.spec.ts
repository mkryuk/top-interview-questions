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
    expect(result).toEqual(0);
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

  it("maximumCandies should return 3 for candies = [4,7,5], k = 4", () => {
    const candies = [4, 7, 5];
    const k = 4;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(3);
  });

  it("maximumCandies should return 2 for candies = [1,2,3,4,5] k = 5", () => {
    const candies = [1, 2, 3, 4, 5];
    const k = 5;
    const result = maximumCandies(candies, k);
    expect(result).toEqual(2);
  });
});
