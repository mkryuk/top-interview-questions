import { removeCoveredIntervals } from "./solution";

describe("Remove Covered Intervals:", () => {
  it("removeCoveredIntervals should return 2 for intervals = [[1,4],[3,6],[2,8]]", () => {
    const intervals = [
      [1, 4],
      [3, 6],
      [2, 8],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(2);
  });

  it("removeCoveredIntervals should return 1 for intervals = [[1,4],[2,3]]", () => {
    const intervals = [
      [1, 4],
      [2, 3],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(1);
  });
});
