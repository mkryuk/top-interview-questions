import { remainingMethods } from "./solution";

describe("3310. Remove Methods From Project:", () => {
  it("remainingMethods should return [0,1,2,3] for n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]", () => {
    const n = 4;
    const k = 1;
    const invocations = [
      [1, 2],
      [0, 1],
      [3, 2],
    ];
    const result = remainingMethods(n, k, invocations);
    expect(result).toEqual([0, 1, 2, 3]);
  });

  it("remainingMethods should return [3,4] for n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]", () => {
    const n = 5;
    const k = 0;
    const invocations = [
      [1, 2],
      [0, 2],
      [0, 1],
      [3, 4],
    ];
    const result = remainingMethods(n, k, invocations);
    expect(result).toEqual([3, 4]);
  });

  it("remainingMethods should return [] for n = 3, k = 2, invocations = [[1,2],[0,1],[2,0]]", () => {
    const n = 3;
    const k = 2;
    const invocations = [
      [1, 2],
      [0, 1],
      [2, 0],
    ];
    const result = remainingMethods(n, k, invocations);
    expect(result).toEqual([]);
  });
});
