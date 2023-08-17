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
});
