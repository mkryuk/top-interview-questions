import { numSpecial } from "./solution";

describe("Special Positions in a Binary Matrix:", () => {
  it("numSpecial should return 1 for mat = [[1,0,0],[0,0,1],[1,0,0]]", () => {
    const mat = [
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ];
    const result = numSpecial(mat);
    expect(result).toEqual(1);
  });

  it("numSpecial should return 3 for mat = [[1,0,0],[0,1,0],[0,0,1]]", () => {
    const mat = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const result = numSpecial(mat);
    expect(result).toEqual(3);
  });

  it("numSpecial should return 1 for mat = [[0,0],[0,0],[1,0]]", () => {
    const mat = [
      [0, 0],
      [0, 0],
      [1, 0],
    ];
    const result = numSpecial(mat);
    expect(result).toEqual(1);
  });

  it("numSpecial should return 1 for mat = [[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]", () => {
    const mat = [
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
    ];
    const result = numSpecial(mat);
    expect(result).toEqual(1);
  });
});
