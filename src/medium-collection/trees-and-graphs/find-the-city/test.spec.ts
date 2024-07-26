import { findTheCity } from "./solution";

describe("Find the City With the Smallest Number of Neighbors at a Threshold Distance", () => {
  it("findTheCity should return 3 for n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4", () => {
    const n = 4;
    const edges = [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ];
    const distanceThreshold = 4;
    const result = findTheCity(n, edges, distanceThreshold);
    expect(result).toEqual(3);
  });

  it("findTheCity should return 0 for n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2", () => {
    const n = 5;
    const edges = [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ];
    const distanceThreshold = 2;
    const result = findTheCity(n, edges, distanceThreshold);
    expect(result).toEqual(0);
  });

  it("findTheCity should return 0 for n = 6, edges = [[0,3,7],[2,4,1],[0,1,5],[2,3,10],[1,3,6],[1,2,1]], distanceThreshold = 417", () => {
    const n = 6;
    const edges = [
      [0, 3, 7],
      [2, 4, 1],
      [0, 1, 5],
      [2, 3, 10],
      [1, 3, 6],
      [1, 2, 1],
    ];
    const distanceThreshold = 417;
    const result = findTheCity(n, edges, distanceThreshold);
    expect(result).toEqual(5);
  });

  it("findTheCity should return 0 for n = 5, edges = [[0,1,10],[0,2,1],[2,3,1],[1,3,1],[1,4,1],[4,5,10]], distanceThreshold = 20", () => {
    const n = 6;
    const edges = [
      [0, 1, 10],
      [0, 2, 1],
      [2, 3, 1],
      [1, 3, 1],
      [1, 4, 1],
      [4, 5, 10],
    ];
    const distanceThreshold = 20;
    const result = findTheCity(n, edges, distanceThreshold);
    expect(result).toEqual(5);
  });
});
