import { minCost } from "./solution";

describe("2561. Rearranging Fruits", () => {
  it("minCost should return 1 for basket1 = [4,2,2,2], basket2 = [1,4,1,2]", () => {
    const basket1 = [4, 2, 2, 2];
    const basket2 = [1, 4, 1, 2];
    const result = minCost(basket1, basket2);
    expect(result).toEqual(1);
  });

  it("minCost should return -1 for basket1 = [2,3,4,1], basket2 = [3,2,5,1]", () => {
    const basket1 = [2, 3, 4, 1];
    const basket2 = [3, 2, 5, 1];
    const result = minCost(basket1, basket2);
    expect(result).toEqual(-1);
  });
});
