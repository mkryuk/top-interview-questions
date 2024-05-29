import { numSteps } from "./solution";

describe("Number of Steps to Reduce a Number in Binary Representation to One", () => {
  it('numSteps should return 6 for s = "1101"', () => {
    const s = "1101";
    const result = numSteps(s);
    expect(result).toEqual(6);
  });

  it('numSteps should return 1 for s = "10"', () => {
    const s = "10";
    const result = numSteps(s);
    expect(result).toEqual(1);
  });

  it('numSteps should return 0 for s = "1"', () => {
    const s = "1";
    const result = numSteps(s);
    expect(result).toEqual(0);
  });
});
