import { checkOverlap } from "./solution";

describe("1401. Circle and Rectangle Overlapping:", () => {
  it("checkOverlap should return true when the circle and rectangle share (1, 0)", () => {
    const result = checkOverlap(1, 0, 0, 1, -1, 3, 1);
    expect(result).toBeTrue();
  });

  it("checkOverlap should return false when the circle and rectangle are separated", () => {
    const result = checkOverlap(1, 1, 1, 1, -3, 2, -1);
    expect(result).toBeFalse();
  });

  it("checkOverlap should return true when the rectangle includes the circle center", () => {
    const result = checkOverlap(1, 0, 0, -1, 0, 0, 1);
    expect(result).toBeTrue();
  });
});
