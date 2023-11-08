import { isReachableAtTime } from "./solution";

describe("Determine if a Cell Is Reachable at a Given Time:", () => {
  it("isReachableAtTime should return true for sx = 2, sy = 4, fx = 7, fy = 7, t = 6", () => {
    const sx = 2;
    const sy = 4;
    const fx = 7;
    const fy = 7;
    const t = 6;
    const result = isReachableAtTime(sx, sy, fx, fy, t);
    expect(result).toBeTrue();
  });

  it("isReachableAtTime should return false for sx = 3, sy = 1, fx = 7, fy = 3, t = 3", () => {
    const sx = 3;
    const sy = 1;
    const fx = 7;
    const fy = 3;
    const t = 3;
    const result = isReachableAtTime(sx, sy, fx, fy, t);
    expect(result).toBeFalse();
  });

  it("isReachableAtTime should return true for sx = 1, sy = 1, fx = 2, fy = 2, t = 1", () => {
    const sx = 1;
    const sy = 1;
    const fx = 2;
    const fy = 2;
    const t = 1;
    const result = isReachableAtTime(sx, sy, fx, fy, t);
    expect(result).toBeTrue();
  });

  it("isReachableAtTime should return false for sx = 1, sy = 2, fx = 1, fy = 2, t = 1", () => {
    const sx = 1;
    const sy = 2;
    const fx = 1;
    const fy = 2;
    const t = 1;
    const result = isReachableAtTime(sx, sy, fx, fy, t);
    expect(result).toBeFalse();
  });
});
