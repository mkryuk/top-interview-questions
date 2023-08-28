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

  it("removeCoveredIntervals should return 1 for intervals = [[1,3],[2,4],[3,6],[0,7]]", () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [3, 6],
      [0, 7],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(1);
  });

  it("removeCoveredIntervals should return 1 for intervals = [[1,3],[2,4],[3,6],[1,7]]", () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [3, 6],
      [1, 7],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(1);
  });

  it("removeCoveredIntervals should return 2 for intervals = [[1,3],[2,4],[3,6],[2,7]]", () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [3, 6],
      [2, 7],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(2);
  });

  it("removeCoveredIntervals should return 4 for intervals = [[1,3],[2,4],[3,5],[4,6]]", () => {
    const intervals = [
      [1, 3],
      [2, 4],
      [3, 5],
      [4, 6],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(4);
  });

  it("removeCoveredIntervals should return 4 for intervals = [[5,7],[4,6],[3,5],[2,4]]", () => {
    const intervals = [
      [5, 7],
      [4, 6],
      [3, 5],
      [2, 4],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(4);
  });

  it("removeCoveredIntervals should return 2 for intervals = [[1,2],[1,3],[1,4],[2,5],[3,5],[4,5]]", () => {
    const intervals = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 5],
      [4, 5],
    ];
    const result = removeCoveredIntervals(intervals);
    expect(result).toEqual(2);
  });
});
