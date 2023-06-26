import { totalCost } from "./solution";

describe("Total Cost to Hire K Workers:", () => {
  it("totalCost should return 11 for costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4", () => {
    const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8];
    const k = 3;
    const candidates = 4;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(11);
  });

  it("totalCost should return 4 for costs = [1,2,4,1], k = 3, candidates = 3", () => {
    const costs = [1, 2, 4, 1];
    const k = 3;
    const candidates = 3;
    const result = totalCost(costs, k, candidates);
    expect(result).toEqual(4);
  });
});
