import { minimumSteps } from "./solution";

describe("Separate Black and White Balls", () => {
  it('minimumSteps should return 1 for s = "101"', () => {
    const s = "101";
    const result = minimumSteps(s);
    expect(result).toEqual(1);
  });

  it('minimumSteps should return 2 for s = "100"', () => {
    const s = "100";
    const result = minimumSteps(s);
    expect(result).toEqual(2);
  });

  it('minimumSteps should return 0 for s = "0111"', () => {
    const s = "0111";
    const result = minimumSteps(s);
    expect(result).toEqual(0);
  });
});
