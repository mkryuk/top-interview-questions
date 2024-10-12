import { minGroups } from "./solution";

describe(" Divide Intervals Into Minimum Number of Groups", () => {
  it("minGroups should return 3 for intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]", () => {
    const intervals = [
      [5, 10],
      [6, 8],
      [1, 5],
      [2, 3],
      [1, 10],
    ];
    const result = minGroups(intervals);
    expect(result).toEqual(3);
  });

  it("minGroups should return 1 for intervals = [[1,3],[5,6],[8,10],[11,13]]", () => {
    const intervals = [
      [1, 3],
      [5, 6],
      [8, 10],
      [11, 13],
    ];
    const result = minGroups(intervals);
    expect(result).toEqual(1);
  });
});
