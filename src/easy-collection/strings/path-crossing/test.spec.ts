import { isPathCrossing } from "./solution";

describe("Path Crossing:", () => {
  it('isPathCrossing should return false for path = "NES"', () => {
    const path = "NES";
    const result = isPathCrossing(path);
    expect(result).toEqual(false);
  });

  it('isPathCrossing should return true for path = "NESWW"', () => {
    const path = "NESWW";
    const result = isPathCrossing(path);
    expect(result).toEqual(true);
  });
});
