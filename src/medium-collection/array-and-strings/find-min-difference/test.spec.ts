import { findMinDifference } from "./solution";

describe("Minimum Time Difference", () => {
  it('findMinDifference should return 1 for timePoints = ["23:59","00:00"]', () => {
    const timePoints = ["23:59", "00:00"];
    const result = findMinDifference(timePoints);
    expect(result).toEqual(1);
  });

  it('findMinDifference should return 0 for timePoints = ["00:00","23:59","00:00"]', () => {
    const timePoints = ["00:00", "23:59", "00:00"];
    const result = findMinDifference(timePoints);
    expect(result).toEqual(0);
  });
});
