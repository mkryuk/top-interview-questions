import { minSteps } from "./solution";

describe("2 Keys Keyboard:", () => {
  it("minSteps should return 3 for n = 3", () => {
    const n = 3;
    const result = minSteps(n);
    expect(result).toEqual(3);
  });

  it("minSteps should return 0 for n = 0", () => {
    const n = 0;
    const result = minSteps(n);
    expect(result).toEqual(0);
  });
});
