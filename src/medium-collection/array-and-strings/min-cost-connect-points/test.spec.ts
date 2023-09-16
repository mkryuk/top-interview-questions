import { minCostConnectPoints } from "./solution";

describe("Min Cost to Connect All Points:", () => {
  it("minCostConnectPoints should return 20 for points = [[0,0],[2,2],[3,10],[5,2],[7,0]]", () => {
    const points = [
      [0, 0],
      [2, 2],
      [3, 10],
      [5, 2],
      [7, 0],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(20);
  });

  it("minCostConnectPoints should return 18 for points = [[3,12],[-2,5],[-4,1]]", () => {
    const points = [
      [3, 12],
      [-2, 5],
      [-4, 1],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(18);
  });

  it("minCostConnectPoints should return 16 for points = [[0,0],[2,2],[0,4],[4,0],[4,4]]", () => {
    const points = [
      [0, 0],
      [2, 2],
      [0, 4],
      [4, 0],
      [4, 4],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(16);
  });
});
