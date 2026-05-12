import { minimumEffort } from "./solution";

describe("1665. Minimum Initial Energy to Finish Tasks:", () => {
  it("minimumEffort should return 8 for tasks = [[1,2],[2,4],[4,8]]", () => {
    const tasks = [
      [1, 2],
      [2, 4],
      [4, 8],
    ];
    const result = minimumEffort(tasks);

    expect(result).toBe(8);
  });

  it("minimumEffort should return 32 for tasks = [[1,3],[2,4],[10,11],[10,12],[8,9]]", () => {
    const tasks = [
      [1, 3],
      [2, 4],
      [10, 11],
      [10, 12],
      [8, 9],
    ];
    const result = minimumEffort(tasks);

    expect(result).toBe(32);
  });

  it("minimumEffort should return 27 for tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]", () => {
    const tasks = [
      [1, 7],
      [2, 8],
      [3, 9],
      [4, 10],
      [5, 11],
      [6, 12],
    ];
    const result = minimumEffort(tasks);

    expect(result).toBe(27);
  });
});
