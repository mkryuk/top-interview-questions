import { findMinArrowShots } from "./solution";

describe("Minimum Number of Arrows to Burst Balloons:", () => {
  it("findMinArrowShots should return 2 for points = [[10,16],[2,8],[1,6],[7,12]]", () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ];
    const result = findMinArrowShots(points);
    expect(result).toEqual(2);
  });

  it("findMinArrowShots should return 4 for points = [[1,2],[3,4],[5,6],[7,8]]", () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const result = findMinArrowShots(points);
    expect(result).toEqual(4);
  });

  it("findMinArrowShots should return 2 for points = [[1,2],[2,3],[3,4],[4,5]]", () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    const result = findMinArrowShots(points);
    expect(result).toEqual(2);
  });

  it("findMinArrowShots should return 2 for points = [[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]]", () => {
    const points = [
      [9, 12],
      [1, 10],
      [4, 11],
      [8, 12],
      [3, 9],
      [6, 9],
      [6, 7],
    ];
    const result = findMinArrowShots(points);
    expect(result).toEqual(2);
  });
});
