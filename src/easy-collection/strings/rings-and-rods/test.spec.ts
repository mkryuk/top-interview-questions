import { countPoints } from "./solution";

describe("Rings and Rods", () => {
  it('countPoints should return 1 for rings = "B0B6G0R6R0R6G9"', () => {
    const rings = "B0B6G0R6R0R6G9";
    const result = countPoints(rings);
    expect(result).toEqual(1);
  });

  it('countPoints should return 1 for rings = "B0R0G0R9R0B0G0"', () => {
    const rings = "B0R0G0R9R0B0G0";
    const result = countPoints(rings);
    expect(result).toEqual(1);
  });

  it('countPoints should return 0 for rings = "G4"', () => {
    const rings = "G4";
    const result = countPoints(rings);
    expect(result).toEqual(1);
  });
});
