import { minimumCost } from "./solution";

describe("2144. Minimum Cost of Buying Candies With Discount:", () => {
  it("minimumCost should return 5 for cost = [1,2,3]", () => {
    const cost = [1, 2, 3];
    const result = minimumCost(cost);
    expect(result).toEqual(5);
  });

  it("minimumCost should return 23 for cost = [6,5,7,9,2,2]", () => {
    const cost = [6, 5, 7, 9, 2, 2];
    const result = minimumCost(cost);
    expect(result).toEqual(23);
  });

  it("minimumCost should return 10 for cost = [5,5]", () => {
    const cost = [5, 5];
    const result = minimumCost(cost);
    expect(result).toEqual(10);
  });
});
