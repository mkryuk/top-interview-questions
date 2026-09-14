import { isRectangleOverlap } from "./solution";

describe("836. Rectangle Overlap:", () => {
  it("isRectangleOverlap should return true for rec1 = [0,0,2,2], rec2 = [1,1,3,3]", () => {
    const rec1 = [0, 0, 2, 2];
    const rec2 = [1, 1, 3, 3];
    const result = isRectangleOverlap(rec1, rec2);
    expect(result).toBeTrue();
  });

  it("isRectangleOverlap should return false for rec1 = [0,0,1,1], rec2 = [1,0,2,1]", () => {
    const rec1 = [0, 0, 1, 1];
    const rec2 = [1, 0, 2, 1];
    const result = isRectangleOverlap(rec1, rec2);
    expect(result).toBeFalse();
  });

  it("isRectangleOverlap should return false for rec1 = [0,0,1,1], rec2 = [2,2,3,3]", () => {
    const rec1 = [0, 0, 1, 1];
    const rec2 = [2, 2, 3, 3];
    const result = isRectangleOverlap(rec1, rec2);
    expect(result).toBeFalse();
  });
});
