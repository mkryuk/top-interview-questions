import { reorderedPowerOf2 } from "./solution";

describe("869. Reordered Power of 2", () => {
  it("reorderedPowerOf2 should return true for n = 1", () => {
    const n = 1;
    const result = reorderedPowerOf2(n);
    expect(result).toBeTrue();
  });

  it("reorderedPowerOf2 should return true for n = 10", () => {
    const n = 10;
    const result = reorderedPowerOf2(n);
    expect(result).toBeFalse();
  });
});
