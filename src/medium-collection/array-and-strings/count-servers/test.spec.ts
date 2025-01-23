import { countServers } from "./solution";

describe("Count Servers that Communicate", () => {
  it("countServers should return 0 for grid = [[1,0],[0,1]]", () => {
    const grid = [
      [1, 0],
      [0, 1],
    ];
    const result = countServers(grid);
    expect(result).toEqual(0);
  });

  it("countServers should return 3 for grid = [[1,0],[1,1]]", () => {
    const grid = [
      [1, 0],
      [1, 1],
    ];
    const result = countServers(grid);
    expect(result).toEqual(3);
  });

  it("countServers should return 4 for grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]", () => {
    const grid = [
      [1, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
    const result = countServers(grid);
    expect(result).toEqual(4);
  });
});
