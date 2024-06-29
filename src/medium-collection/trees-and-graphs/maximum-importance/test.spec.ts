import { maximumImportance } from "./solution";

describe("Maximum Total Importance of Roads", () => {
  it("maximumImportance should return 43 for n = 5, roads = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]", () => {
    const n = 5;
    const roads = [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 2],
      [1, 3],
      [2, 4],
    ];
    const result = maximumImportance(n, roads);
    expect(result).toEqual(43);
  });

  it("maximumImportance should return 20 for n = 5, roads = [[0,3],[2,4],[1,3]]", () => {
    const n = 5;
    const roads = [
      [0, 3],
      [2, 4],
      [1, 3],
    ];
    const result = maximumImportance(n, roads);
    expect(result).toEqual(20);
  });

  it("maximumImportance should return 9 for n = 5, roads = [[0,1]]", () => {
    const n = 5;
    const roads = [[0, 1]];
    const result = maximumImportance(n, roads);
    expect(result).toEqual(9);
  });
});
