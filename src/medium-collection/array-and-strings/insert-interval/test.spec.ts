import { insert } from "./solution";

describe("Insert Interval", () => {
  it("insert should return [[1,5],[6,9]] for intervals = [[1,3],[6,9]], newInterval = [2,5]", () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  it("insert should return [[1,2],[3,10],[12,16]] for intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]", () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval = [4, 8];
    const result = insert(intervals, newInterval);
    expect(result).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });
});
