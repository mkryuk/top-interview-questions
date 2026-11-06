import { countServers } from "./solution";

describe("2747. Count Zero Request Servers:", () => {
  it("countServers should return [1,2] for n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]", () => {
    const n = 3;
    const logs = [
      [1, 3],
      [2, 6],
      [1, 5],
    ];
    const x = 5;
    const queries = [10, 11];
    const result = countServers(n, logs, x, queries);
    expect(result).toEqual([1, 2]);
  });

  it("countServers should return [0,1] for n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]", () => {
    const n = 3;
    const logs = [
      [2, 4],
      [2, 1],
      [1, 2],
      [3, 1],
    ];
    const x = 2;
    const queries = [3, 4];
    const result = countServers(n, logs, x, queries);
    expect(result).toEqual([0, 1]);
  });
});
