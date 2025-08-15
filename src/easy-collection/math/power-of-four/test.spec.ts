import { isPowerOfFour } from "./solution";

describe("342. Power of Four", () => {
  it("isPowerOfFour should return true for n = 16", () => {
    const n = 16;
    const result = isPowerOfFour(n);
    expect(result).toBeTrue();
  });

  it("isPowerOfFour should return false for n = 5", () => {
    const n = 5;
    const result = isPowerOfFour(n);
    expect(result).toBeFalse();
  });

  it("isPowerOfFour should return true for n = 1", () => {
    const n = 1;
    const result = isPowerOfFour(n);
    expect(result).toBeTrue();
  });
});
