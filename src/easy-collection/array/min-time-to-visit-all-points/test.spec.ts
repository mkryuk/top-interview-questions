import { minTimeToVisitAllPoints } from "./solution";

describe(" Minimum Time Visiting All Points:", () => {
  it("minTimeToVisitAllPoints should return 7 for points = [[1,1],[3,4],[-1,0]]", () => {
    const points = [
      [1, 1],
      [3, 4],
      [-1, 0],
    ];
    const result = minTimeToVisitAllPoints(points);
    expect(result).toEqual(7);
  });

  it("minTimeToVisitAllPoints should return 5 for points = [[3,2],[-2,2]]", () => {
    const points = [
      [3, 2],
      [-2, 2],
    ];
    const result = minTimeToVisitAllPoints(points);
    expect(result).toEqual(5);
  });
});
