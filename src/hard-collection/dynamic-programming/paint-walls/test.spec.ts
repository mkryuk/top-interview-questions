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

  it("paintWalls should return 12 for cost = [2,3,4,2], time = [1,1,2,1]", () => {
    const cost = [8, 7, 5, 15];
    const time = [1, 1, 2, 1];
    const result = paintWalls(cost, time);
    expect(result).toEqual(12);
  });

  it("paintWalls should return 63 for cost = [42,8,28,35,21,13,21,35], time = [2,1,1,1,2,1,1,2]", () => {
    const cost = [42, 8, 28, 35, 21, 13, 21, 35];
    const time = [2, 1, 1, 1, 2, 1, 1, 2];
    const result = paintWalls(cost, time);
    expect(result).toEqual(63);
  });
});
