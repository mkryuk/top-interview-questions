import { minCostClimbingStairs } from "./solution";

describe("Min Cost Climbing Stairs:", () => {
  it("minCostClimbingStairs should return 15 for cost = [10,15,20]", () => {
    const cost = [10, 15, 20];
    const result = minCostClimbingStairs(cost);
    expect(result).toEqual(15);
  });

  it("minCostClimbingStairs should return 6 for cost = [1,100,1,1,1,100,1,1,100,1]", () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    const result = minCostClimbingStairs(cost);
    expect(result).toEqual(6);
  });
});
