import { mostProfitablePath } from "./solution";

describe("Most Profitable Path in a Tree", () => {
  it("mostProfitablePath should return 6 for edges = [[0,1],[1,2],[1,3],[3,4]], bob = 3, amount = [-2,4,2,-4,6]", () => {
    const edges = [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ];
    const bob = 3;
    const amount = [-2, 4, 2, -4, 6];
    const result = mostProfitablePath(edges, bob, amount);
    expect(result).toEqual(6);
  });

  it("mostProfitablePath should return -7280 for edges = [[0,1]], bob = 1, amount = [-7280,2350]", () => {
    const edges = [[0, 1]];
    const bob = 1;
    const amount = [-7280, 2350];
    const result = mostProfitablePath(edges, bob, amount);
    expect(result).toEqual(-7280);
  });
});
