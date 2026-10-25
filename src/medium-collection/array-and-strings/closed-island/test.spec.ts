import { closedIsland } from "./solution";

describe("1254. Number of Closed Islands:", () => {
  it("closedIsland should return 2 for example 1", () => {
    const grid = [
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 1, 0],
      [1, 0, 1, 0, 1, 1, 1, 0],
      [1, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 0],
    ];
    const result = closedIsland(grid);
    expect(result).toEqual(2);
  });

  it("closedIsland should return 1 for example 2", () => {
    const grid = [
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ];
    const result = closedIsland(grid);
    expect(result).toEqual(1);
  });

  it("closedIsland should return 2 for example 3", () => {
    const grid = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 1, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];
    const result = closedIsland(grid);
    expect(result).toEqual(2);
  });
});
