import { numSubmat } from "./solution";

describe("1504. Count Submatrices With All Ones", () => {
  it("numSubmat should return 13 for mat = [[1,0,1],[1,1,0],[1,1,0]]", () => {
    const mat = [
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 0],
    ];
    const result = numSubmat(mat);
    expect(result).toEqual(13);
  });

  it("numSubmat should return 24 for mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]", () => {
    const mat = [
      [0, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 1, 1, 0],
    ];
    const result = numSubmat(mat);
    expect(result).toEqual(24);
  });
});
