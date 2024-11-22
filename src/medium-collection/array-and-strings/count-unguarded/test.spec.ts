import { countUnguarded } from "./solution";

describe("Count Unguarded Cells in the Grid", () => {
  it("countUnguarded should return 7 for m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]", () => {
    const m = 4;
    const n = 6;
    const guards = [
      [0, 0],
      [1, 1],
      [2, 3],
    ];
    const walls = [
      [0, 1],
      [2, 2],
      [1, 4],
    ];
    const result = countUnguarded(m, n, guards, walls);
    expect(result).toEqual(7);
  });

  it("countUnguarded should return 4 for m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]", () => {
    const m = 3;
    const n = 3;
    const guards = [[1, 1]];
    const walls = [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ];
    const result = countUnguarded(m, n, guards, walls);
    expect(result).toEqual(4);
  });
});
