import { paintWalls } from "./solution";

describe("Painting the Walls:", () => {
  it("paintWalls should return 3 for cost = [1,2,3,2], time = [1,2,3,2]", () => {
    const cost = [1, 2, 3, 2];
    const time = [1, 2, 3, 2];
    const result = paintWalls(cost, time);
    expect(result).toEqual(3);
  });

  it("paintWalls should return 4 for cost = [2,3,4,2], time = [1,1,1,1]", () => {
    const cost = [2, 3, 4, 2];
    const time = [1, 1, 1, 1];
    const result = paintWalls(cost, time);
    expect(result).toEqual(4);
  });
});
