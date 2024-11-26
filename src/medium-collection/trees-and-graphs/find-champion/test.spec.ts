import { findChampion } from "./solution";

describe("Find Champion II", () => {
  it("findChampion should return 0 for n = 3, edges = [[0,1],[1,2]]", () => {
    const n = 3;
    const edges = [
      [0, 1],
      [1, 2],
    ];
    const result = findChampion(n, edges);
    expect(result).toEqual(0);
  });

  it("findChampion should return -1 for n = 4, edges = [[0,2],[1,3],[1,2]]", () => {
    const n = 4;
    const edges = [
      [0, 2],
      [1, 3],
      [1, 2],
    ];
    const result = findChampion(n, edges);
    expect(result).toEqual(-1);
  });
});
