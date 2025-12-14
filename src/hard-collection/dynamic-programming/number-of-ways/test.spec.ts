import { numberOfWays } from "./solution";

describe("2147. Number of Ways to Divide a Long Corridor:", () => {
  it('numberOfWays should return 3 for corridor = "SSPPSPS"', () => {
    const corridor = "SSPPSPS";
    const result = numberOfWays(corridor);
    expect(result).toEqual(3);
  });

  it('numberOfWays should return 1 for corridor = "PPSPSP"', () => {
    const corridor = "PPSPSP";
    const result = numberOfWays(corridor);
    expect(result).toEqual(1);
  });

  it('numberOfWays should return 0 for corridor = "S"', () => {
    const corridor = "S";
    const result = numberOfWays(corridor);
    expect(result).toEqual(0);
  });
});
