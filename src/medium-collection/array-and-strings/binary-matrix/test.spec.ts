import { updateMatrix } from "./solution";

describe("01 Matrix:", () => {
  it("updateMatrix should return [[0,0,0],[0,1,0],[0,0,0]] for mat = [[0,0,0],[0,1,0],[0,0,0]]", () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  it("updateMatrix should return [[0,0,0],[0,1,0],[1,2,1]] for mat = [[0,0,0],[0,1,0],[1,1,1]]", () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ]);
  });

  it("updateMatrix should return [[0,1,2],[1,2,3],[2,3,4]] for mat = [[0,1,1],[1,1,1],[1,1,1]]", () => {
    const mat = [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ]);
  });

  it("updateMatrix should return [[0,1,2],[1,2,3],[2,1,2],[1,0,1]] for mat = [[0,1,1],[1,1,1],[1,1,1],[1,0,1]]", () => {
    const mat = [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 0, 1],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [0, 1, 2],
      [1, 2, 3],
      [2, 1, 2],
      [1, 0, 1],
    ]);
  });

  it("updateMatrix should return [[4,3,4],[3,2,3],[2,1,2],[1,0,1]] for mat = [[1,1,1],[1,1,1],[1,1,1],[1,0,1]]", () => {
    const mat = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 0, 1],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [4, 3, 4],
      [3, 2, 3],
      [2, 1, 2],
      [1, 0, 1],
    ]);
  });

  it("updateMatrix should return [[5,4,3],[4,3,2],[3,2,1],[2,1,0]] for mat = [[1,1,1],[1,1,1],[1,1,1],[1,1,0]]", () => {
    const mat = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [5, 4, 3],
      [4, 3, 2],
      [3, 2, 1],
      [2, 1, 0],
    ]);
  });

  it("updateMatrix should return [[0,1,2],[1,0,1],[2,1,0]] for mat = [[0,1,1],[1,0,1],[1,1,0]]", () => {
    const mat = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ];
    const result = updateMatrix(mat);
    expect(result).toEqual([
      [0, 1, 2],
      [1, 0, 1],
      [2, 1, 0],
    ]);
  });
});
