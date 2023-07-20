import { eraseOverlapIntervals } from "./solution";

describe("Non-overlapping Intervals:", () => {
  it("eraseOverlapIntervals should return 1 for intervals = [[1,2],[2,3],[3,4],[1,3]]", () => {
    const intervals = [
      [1, 2],
      [2, 3],
      [3, 4],
      [1, 3],
    ];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toEqual(1);
  });

  it("eraseOverlapIntervals should return 2 for intervals = [[1,2],[1,2],[1,2]]", () => {
    const intervals = [
      [1, 2],
      [1, 2],
      [1, 2],
    ];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toEqual(2);
  });

  it("eraseOverlapIntervals should return 0 for intervals = [[1,2],[2,3]]", () => {
    const intervals = [
      [1, 2],
      [2, 3],
    ];
    const result = eraseOverlapIntervals(intervals);
    expect(result).toEqual(0);
  });
});
