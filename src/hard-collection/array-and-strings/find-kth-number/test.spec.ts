import { findKthNumber } from "./solution";

describe("K-th Smallest in Lexicographical Order", () => {
  it("findKthNumber should return 10 for n = 13, k = 2", () => {
    const n = 13;
    const k = 2;
    const result = findKthNumber(n, k);
    expect(result).toEqual(10);
  });

  it("findKthNumber should return 1 for n = 1, k = 1", () => {
    const n = 1;
    const k = 1;
    const result = findKthNumber(n, k);
    expect(result).toEqual(1);
  });
});
