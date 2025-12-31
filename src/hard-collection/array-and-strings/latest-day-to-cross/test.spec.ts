import { latestDayToCross } from "./solution";

describe("1970. Last Day Where You Can Still Cross:", () => {
  it("latestDayToCross should return 2 for row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]", () => {
    const row = 2;
    const col = 2;
    const cells = [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2],
    ];
    const result = latestDayToCross(row, col, cells);
    expect(result).toEqual(2);
  });

  it("latestDayToCross should return 1 for row = 2, col = 2, cells = [[1,1],[1,2],[2,1],[2,2]]", () => {
    const row = 2;
    const col = 2;
    const cells = [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ];
    const result = latestDayToCross(row, col, cells);
    expect(result).toEqual(1);
  });

  it("latestDayToCross should return 3 for row = 3, col = 3, cells = [[1,2],[2,1],[3,3],[2,2],[1,1],[1,3],[2,3],[3,2],[3,1]]", () => {
    const row = 3;
    const col = 3;
    const cells = [
      [1, 2],
      [2, 1],
      [3, 3],
      [2, 2],
      [1, 1],
      [1, 3],
      [2, 3],
      [3, 2],
      [3, 1],
    ];
    const result = latestDayToCross(row, col, cells);
    expect(result).toEqual(3);
  });
});
