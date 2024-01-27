import { kInversePairs } from "./solution";

describe("K Inverse Pairs Array:", () => {
  it("kInversePairs should return 1 for n = 3, k = 0", () => {
    const n = 3;
    const k = 0;
    const result = kInversePairs(n, k);
    expect(result).toEqual(1);
  });

  it("kInversePairs should return 2 for n = 3, k = 1", () => {
    const n = 3;
    const k = 1;
    const result = kInversePairs(n, k);
    expect(result).toEqual(2);
  });
});
