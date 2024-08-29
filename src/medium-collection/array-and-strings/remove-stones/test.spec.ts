import { removeStones } from "./solution";

describe("Most Stones Removed with Same Row or Column", () => {
  it("removeStones should return 5 for stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]", () => {
    const stones = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 1],
      [2, 2],
    ];
    const result = removeStones(stones);
    expect(result).toEqual(5);
  });

  it("removeStones should return 3 for stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]", () => {
    const stones = [
      [0, 0],
      [0, 2],
      [1, 1],
      [2, 0],
      [2, 2],
    ];
    const result = removeStones(stones);
    expect(result).toEqual(3);
  });

  it("removeStones should return 0 for stones = [[0,0]]", () => {
    const stones = [[0, 0]];
    const result = removeStones(stones);
    expect(result).toEqual(0);
  });
});
