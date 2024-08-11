import { minDays } from "./solution";

describe("Minimum Number of Days to Disconnect Island", () => {
  it("minDays should return 2 for grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]", () => {
    const grid = [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ];
    const result = minDays(grid);
    expect(result).toEqual(2);
  });

  it("minDays should return 2 for grid = [[1,1]]", () => {
    const grid = [[1, 1]];
    const result = minDays(grid);
    expect(result).toEqual(2);
  });
});
