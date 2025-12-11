import { countCoveredBuildings } from "./solution";

describe("3531. Count Covered Buildings", () => {
  it("countCoveredBuildings should return 1 for n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]", () => {
    const n = 3;
    const buildings = [
      [1, 2],
      [2, 2],
      [3, 2],
      [2, 1],
      [2, 3],
    ];
    const result = countCoveredBuildings(n, buildings);
    expect(result).toEqual(1);
  });

  it("countCoveredBuildings should return 0 for n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]", () => {
    const n = 3;
    const buildings = [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ];
    const result = countCoveredBuildings(n, buildings);
    expect(result).toEqual(0);
  });

  it("countCoveredBuildings should return 1 for n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]", () => {
    const n = 5;
    const buildings = [
      [1, 3],
      [3, 2],
      [3, 3],
      [3, 5],
      [5, 3],
    ];
    const result = countCoveredBuildings(n, buildings);
    expect(result).toEqual(1);
  });
});
