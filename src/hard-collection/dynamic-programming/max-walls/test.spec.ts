import { maxWalls } from "./solution";

describe("Maximum Walls Destroyed by Robots:", () => {
  it("maxWalls should return 1 for robots = [4], distance = [3], walls = [1,10]", () => {
    const robots = [4];
    const distance = [3];
    const walls = [1, 10];
    const result = maxWalls(robots, distance, walls);
    expect(result).toEqual(1);
  });

  it("maxWalls should return 3 for robots = [10,2], distance = [5,1], walls = [5,2,7]", () => {
    const robots = [10, 2];
    const distance = [5, 1];
    const walls = [5, 2, 7];
    const result = maxWalls(robots, distance, walls);
    expect(result).toEqual(3);
  });

  it("maxWalls should return 0 for robots = [1,2], distance = [100,1], walls = [10]", () => {
    const robots = [1, 2];
    const distance = [100, 1];
    const walls = [10];
    const result = maxWalls(robots, distance, walls);
    expect(result).toEqual(0);
  });
});
