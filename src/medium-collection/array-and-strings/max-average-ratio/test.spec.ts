import { maxAverageRatio } from "./solution";

describe("Maximum Average Pass Ratio", () => {
  it("maxAverageRatio should return 0.78333 for classes = [[1,2],[3,5],[2,2]], extraStudents = 2", () => {
    const classes = [
      [1, 2],
      [3, 5],
      [2, 2],
    ];
    const extraStudents = 2;
    const result = maxAverageRatio(classes, extraStudents);
    expect(result).toEqual(0.7833);
  });

  it("maxAverageRatio should return 0.53485 for classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4", () => {
    const classes = [
      [2, 4],
      [3, 9],
      [4, 5],
      [2, 10],
    ];
    const extraStudents = 4;
    const result = maxAverageRatio(classes, extraStudents);
    expect(result).toEqual(0.53485);
  });
});
