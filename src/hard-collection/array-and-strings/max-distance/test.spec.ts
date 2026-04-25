import { maxDistance } from "./solution";

describe("3464. Maximize the Distance Between Points on a Square:", () => {
  it("maxDistance should return 2 for side = 2, points = [[0,2],[2,0],[2,2],[0,0]], k = 4", () => {
    const side = 2;
    const points = [
      [0, 2],
      [2, 0],
      [2, 2],
      [0, 0],
    ];
    const k = 4;

    const result = maxDistance(side, points, k);

    expect(result).toEqual(2);
  });

  it("maxDistance should return 1 for side = 2, points = [[0,0],[1,2],[2,0],[2,2],[2,1]], k = 4", () => {
    const side = 2;
    const points = [
      [0, 0],
      [1, 2],
      [2, 0],
      [2, 2],
      [2, 1],
    ];
    const k = 4;

    const result = maxDistance(side, points, k);

    expect(result).toEqual(1);
  });

  it("maxDistance should return 1 for side = 2, points = [[0,0],[0,1],[0,2],[1,2],[2,0],[2,2],[2,1]], k = 5", () => {
    const side = 2;
    const points = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
      [2, 0],
      [2, 2],
      [2, 1],
    ];
    const k = 5;

    const result = maxDistance(side, points, k);

    expect(result).toEqual(1);
  });
});
