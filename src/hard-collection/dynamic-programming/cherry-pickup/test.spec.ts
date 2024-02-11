import { cherryPickup } from "./solution";

describe("Cherry Pickup II:", () => {
  it("cherryPickup should return 24 for grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]", () => {
    const grid = [
      [3, 1, 1],
      [2, 5, 1],
      [1, 5, 5],
      [2, 1, 1],
    ];
    const result = cherryPickup(grid);
    expect(result).toEqual(24);
  });

  it("cherryPickup should return 28 for grid = [[3,1,1],[2,5,1],[1,5,5],[2,1,1]]", () => {
    const grid = [
      [1, 0, 0, 0, 0, 0, 1],
      [2, 0, 0, 0, 0, 3, 0],
      [2, 0, 9, 0, 0, 0, 0],
      [0, 3, 0, 5, 4, 0, 0],
      [1, 0, 2, 3, 0, 0, 6],
    ];
    const result = cherryPickup(grid);
    expect(result).toEqual(28);
  });
});
