import { secondMinimum } from "./solution";

describe("Second Minimum Time to Reach Destination", () => {
  it("secondMinimum should return 13 for n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5", () => {
    const n = 5;
    const edges = [
      [1, 2],
      [1, 3],
      [1, 4],
      [3, 4],
      [4, 5],
    ];
    const time = 3;
    const change = 5;
    const result = secondMinimum(n, edges, time, change);
    expect(result).toEqual(13);
  });

  it("secondMinimum should return 11 for n = 2, edges = [[1,2]], time = 3, change = 2", () => {
    const n = 2;
    const edges = [[1, 2]];
    const time = 3;
    const change = 2;
    const result = secondMinimum(n, edges, time, change);
    expect(result).toEqual(11);
  });
});
