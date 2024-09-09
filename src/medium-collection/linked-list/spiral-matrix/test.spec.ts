import { arrayToList } from "../common";
import { spiralMatrix } from "./solution";

describe("Spiral Matrix IV", () => {
  it("spiralMatrix should return [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]] for m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]", () => {
    const m = 3;
    const n = 5;
    const nodes = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];
    const head = arrayToList(nodes);
    const result = spiralMatrix(m, n, head);
    expect(result).toEqual([
      [3, 0, 2, 6, 8],
      [5, 0, -1, -1, 1],
      [5, 2, 4, 9, 7],
    ]);
  });

  it("spiralMatrix should return [[0,1,2,-1]] for m = 1, n = 4, head = [0,1,2]", () => {
    const m = 1;
    const n = 4;
    const nodes = [0, 1, 2];
    const head = arrayToList(nodes);
    const result = spiralMatrix(m, n, head);
    expect(result).toEqual([[0, 1, 2, -1]]);
  });
});
