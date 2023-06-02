import { shortestPathBinaryMatrix } from "./solution";

describe("Shortest Path in Binary Matrix:", () => {
  it("shortestPathBinaryMatrix should return 2 for grid = [[0,1],[1,0]]", () => {
    const grid = [
      [0, 1],
      [1, 0],
    ];
    const result = shortestPathBinaryMatrix(grid);
    expect(result).toEqual(2);
  });

  it("shortestPathBinaryMatrix should return 4 for grid = [[0,0,0],[1,1,0],[1,1,0]]", () => {
    const grid = [
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = shortestPathBinaryMatrix(grid);
    expect(result).toEqual(4);
  });

  it("shortestPathBinaryMatrix should return -1 for grid = [[1,0,0],[1,1,0],[1,1,0]]", () => {
    const grid = [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = shortestPathBinaryMatrix(grid);
    expect(result).toEqual(-1);
  });

  it("shortestPathBinaryMatrix should return 8 for test 4", () => {
    const grid = [
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0],
    ];
    const result = shortestPathBinaryMatrix(grid);
    expect(result).toEqual(8);
  });
});
