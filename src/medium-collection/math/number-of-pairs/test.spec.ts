import { numberOfPairs } from "./solution";

describe("3025. Find the Number of Ways to Place People I", () => {
  it("numberOfPairs should return 0 for points = [[1,1],[2,2],[3,3]]", () => {
    const points = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];
    const result = numberOfPairs(points);
    expect(result).toEqual(0);
  });

  it("numberOfPairs should return 2 for points = [[6,2],[4,4],[2,6]]", () => {
    const points = [
      [6, 2],
      [4, 4],
      [2, 6],
    ];
    const result = numberOfPairs(points);
    expect(result).toEqual(2);
  });

  it("numberOfPairs should return 2 for points = [[3,1],[1,3],[1,1]]", () => {
    const points = [
      [3, 1],
      [1, 3],
      [1, 1],
    ];
    const result = numberOfPairs(points);
    expect(result).toEqual(2);
  });
});
