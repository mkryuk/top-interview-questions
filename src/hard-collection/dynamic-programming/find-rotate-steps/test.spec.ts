import { findRotateSteps } from "./solution";

describe("Freedom Trail", () => {
  it('findRotateSteps should return 4 fot ring = "godding", key = "gd"', () => {
    const ring = "godding";
    const key = "gd";
    const result = findRotateSteps(ring, key);
    expect(result).toEqual(4);
  });

  it('findRotateSteps should return 13 fot ring = "godding", key = "godding"', () => {
    const ring = "godding";
    const key = "godding";
    const result = findRotateSteps(ring, key);
    expect(result).toEqual(13);
  });
});
