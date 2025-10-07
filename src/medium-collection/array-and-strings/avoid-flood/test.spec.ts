import { avoidFlood } from "./solution";

describe("1488. Avoid Flood in The City", () => {
  it("avoidFlood should return [-1,-1,-1,-1] for rains = [1,2,3,4]", () => {
    const rains = [1, 2, 3, 4];
    const result = avoidFlood(rains);
    expect(result).toEqual([-1, -1, -1, -1]);
  });

  it("avoidFlood should return [-1,-1,2,1,-1,-1] rains = [1,2,0,0,2,1]", () => {
    const rains = [1, 2, 0, 0, 2, 1];
    const result = avoidFlood(rains);
    expect(result).toEqual([-1, -1, 2, 1, -1, -1]);
  });

  it("avoidFlood should return [] rains = [1,2,0,1,2]", () => {
    const rains = [1, 2, 0, 1, 2];
    const result = avoidFlood(rains);
    expect(result).toEqual([]);
  });
});
