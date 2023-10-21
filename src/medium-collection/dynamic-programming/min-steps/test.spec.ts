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

  it("minSteps should return 5 for n = 6", () => {
    const n = 6;
    const result = minSteps(n);
    expect(result).toEqual(5);
  });

  it("minSteps should return 7 for n = 7", () => {
    const n = 7;
    const result = minSteps(n);
    expect(result).toEqual(7);
  });

  it("minSteps should return 6 for n = 8", () => {
    const n = 8;
    const result = minSteps(n);
    expect(result).toEqual(6);
  });
});
