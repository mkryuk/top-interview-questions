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

  it("minCostConnectPoints should return 0 for points = [[0,0]]", () => {
    const points = [[0, 0]];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(0);
  });

  it("minCostConnectPoints should return 8 for points = [[0,0], [1,1], [2,2], [3,3], [4,4]]", () => {
    const points = [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(8);
  });

  it("minCostConnectPoints should return 20 for points = [[3,0], [3,5], [3,10], [3,15], [3,20]]", () => {
    const points = [
      [3, 0],
      [3, 5],
      [3, 10],
      [3, 15],
      [3, 20],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(20);
  });

  it("minCostConnectPoints should return 20 for points = [[0,5], [5,5], [10,5], [15,5], [20,5]]", () => {
    const points = [
      [0, 5],
      [5, 5],
      [10, 5],
      [15, 5],
      [20, 5],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(20);
  });

  it("minCostConnectPoints should return 15 for points = [[0,0], [0,5], [5,5], [5,0]]", () => {
    const points = [
      [0, 0],
      [0, 5],
      [5, 5],
      [5, 0],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(15);
  });

  it("minCostConnectPoints should return 17 for points = [[0,0], [0,7], [5,7], [5,0]]", () => {
    const points = [
      [0, 0],
      [0, 7],
      [5, 7],
      [5, 0],
    ];
    const result = minCostConnectPoints(points);
    expect(result).toEqual(17);
  });
});
