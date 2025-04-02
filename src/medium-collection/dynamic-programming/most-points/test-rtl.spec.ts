import { mostPoints } from "./solution-rtl";

describe("Solving Questions With Brainpower", () => {
  it("mostPoints should return 5 for questions = [[3,2],[4,3],[4,4],[2,5]]", () => {
    const questions = [
      [3, 2],
      [4, 3],
      [4, 4],
      [2, 5],
    ];
    const result = mostPoints(questions);
    expect(result).toEqual(5);
  });

  it("mostPoints should return 7 for questions = [[1,1],[2,2],[3,3],[4,4],[5,5]]", () => {
    const questions = [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ];
    const result = mostPoints(questions);
    expect(result).toEqual(7);
  });
});
