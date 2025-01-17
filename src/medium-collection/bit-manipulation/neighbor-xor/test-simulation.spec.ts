import { doesValidArrayExist } from "./solution-simulation";

describe("Neighboring Bitwise XOR", () => {
  it("doesValidArrayExist should return true for derived = [1,1,0]", () => {
    const derived = [1, 1, 0];
    const result = doesValidArrayExist(derived);
    expect(result).toBeTrue();
  });

  it("doesValidArrayExist should return true for derived = [1,1]", () => {
    const derived = [1, 1];
    const result = doesValidArrayExist(derived);
    expect(result).toBeTrue();
  });

  it("doesValidArrayExist should return true for derived = [1,0]", () => {
    const derived = [1, 0];
    const result = doesValidArrayExist(derived);
    expect(result).toBeFalse();
  });
});
